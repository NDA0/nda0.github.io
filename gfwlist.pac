var proxy = "SOCKS5 10.10.0.66:1080; SOCKS 10.10.0.66:1080; DIRECT;";

function FindProxyForURL(host, url) 
{
	return proxy;
}
