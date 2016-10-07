# a-scrollbar-fill
Javascript shim to create scrolling divs with content that ignores scrollbar
width.

It figures out the width of the browser's scrollbar and styles the scrollbar to blend
into the background. (sans Edge and Firefox)

There are two usages:
- a-scrollbar-fill
This forces the scrollbar to show for every browser. Edge/Firefox doesn't allow
styling so it will show default scrollbar.

- a-scrollbar-fill-auto
Same except that it allows the scrollbar to show/hide. This will act the same
as overflow-y: auto for Edge/Firefox. It's good for simple situations where it
matters if showing the scrollbar all the time doesn't work but you still
want the dominate browsers to look good.

- a-scrollbar-fill-hover
Same as a-scrollbar-fill except that it shows the scrollbar only on hover.

- a-scrollbar-fill-none
Same as a-scrollbar-fill except that the scrollbar never shows up. This is good
for mobile simulations (on non Edge/Firefox browsers at least) 
