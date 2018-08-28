// JSX
/*
<h1>
    <Sum a={4} b={3} />
</h1>
*/

// JS
/*
React.createElement(
  'h1',
  null,
  React.createElement(
    Sum,
    { a: 4, b: 3 },
    null
  )
)
*/



// JSX
/*
<label
    htmlFor="name"
    className="highlight"
    style={{
        backgroundColor: "yellow"
    }}
>
    Foo Bar
</label>
*/
// the outer curly braces delimited the JSX expression
// the inner curly braces delimit the JS object literal

// HTML
/*
<label
    for="name"
    class="highlight"
    style="background-color: "yellow"
>
    Foo Bar
</label>
*/