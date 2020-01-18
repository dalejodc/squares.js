# How many squares?

To excecute the script run:
```js
node squares.js
```

By default the quantity of dots is 3x3; but you can edit it by changing the line 84 of the square.js file. The expectd output is 6 squares for 3x3 dots.

```js
calculateSquares(3, 3);
```

## Logic

Basically we are getting the reference of every dot (x, y). We are checking if theres is a space (or n spaces) to the right side and to the down side. If so, we have an inverted L, that means that there is a perfect square. There are also other scenarios of squares, as diamonds and rotated squares.

## Example

Lets take a look to a 3x3

![image](https://user-images.githubusercontent.com/36966980/72659207-d0828300-3981-11ea-9849-b476029f8106.png)

## Known issues
- Irregular square rotation is not supported
