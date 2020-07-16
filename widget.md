My plan would be to create a Widget Table that has columns of id, name, color, quantity. Example schema:

Widget table
id | name(string) | color(string) | quantity(int)
----------------------------
1  | 'app'        | 'blue'        | 10
2  | 'bit'        | 'red'         | 20
3  | 'bit'        | 'green'       | 40


So I would need 2 endpoints and follow RESTFul conventions so depending on the type of request I could interact with my database differently.
Example cases below:

"GET" localhost.com/widget get all widgets
"GET" localhost.com/widget/:id for get 1 widget
"DELETE" localhost.com/widget/:id for deleting 1 widget
"POST" localhost.com/widget for adding 1 widget
"PUT" localhost.com/widget/:id for adjusting the quantity of a widget

In terms of error checking ther is validations that need to be done when creating a new widget like is there a name is there a color and is there inventory. Also checking for a positive integer for inventory is a must.

You can protect routes by requiring authorization headers to be able to access any endpoint. I would use a token based system that would send a token and on the backend
parse and match the token based to veryify the token authenticity. Using JWT and brypt I would also add a User table that would allow me to give users authorization. Alternatively I could create an API key that would be required
when accessing an endpoint. I could access this through params and give the API key to those that needed access.

I would host this on a dynamic web hosting service so my web app woudl just have to fetch to an endpoint to access the information I need.
