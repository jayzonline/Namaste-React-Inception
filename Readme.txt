Episode 1: Nov 4TH

What is CDN ?
---------------------------------------------------------------------------------------------------------
A CDN (Content Delivery Network) is a network of servers distributed globally to deliver content to users 
more efficiently. By hosting content like JavaScript libraries, images, and videos on multiple servers, 
CDNs reduce latency, decrease load times, and improve performance by serving content from a server near 
the user.


crossorigin attribute
----------------------------------------------------------------------------------------------------------
The crossorigin attribute in the <script> tag controls how the browser handles requests for 
cross-origin resources, especially when it comes to credentials (like cookies and HTTP authorization headers). Here’s how it works:

crossorigin="anonymous": This sends the request without credentials, 
ensuring no cookies or authentication information is included. This is used when accessing resources that 
don’t require credentials.

crossorigin="use-credentials": This sends credentials along with the request, used for resources 
that require authentication.

