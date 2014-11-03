from django.shortcuts import render
from django.http import HttpResponse
import urllib, json

def index(request):
	return render(request, 'query_folketinget/index.html')

def test(request):
	url = "http://oda.ft.dk/api/Afstemning?$inlinecount=allpages"
	response = urllib.urlopen(url);
	data = json.loads(response.read())
	data_return = json.dumps(data)
	oda = data['odata.metadata']
	context = {'data' : data_return}
	return HttpResponse(data_return)
