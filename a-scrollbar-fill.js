

function createScrollbarFill () {

    var scrollbar_style_str = '\
                    .a-scrollbar-fill::-webkit-scrollbar,\
                    .a-scrollbar-fill-auto::-webkit-scrollbar,\
                    .a-scrollbar-fill-hover::-webkit-scrollbar {\
                        width: 10px !important;\
                        height: 10px !important;\
                    }\
                    .a-scrollbar-fill-none::-webkit-scrollbar {\
                        width: 0px !important;\
                    }\
                    .a-scrollbar-fill::-webkit-scrollbar-track,\
                    .a-scrollbar-fill-auto::-webkit-scrollbar-track,\
                    .a-scrollbar-fill-hover::-webkit-scrollbar-track {\
                        background: transparent;\
                    }\
                    .a-scrollbar-fill::-webkit-scrollbar-thumb,\
                    .a-scrollbar-fill-auto::-webkit-scrollbar-thumb,\
                    .a-scrollbar-fill-hover::-webkit-scrollbar-thumb {\
                        border-radius: 5px !important;\
                        -moz-background-clip: padding;\
                        -webkit-background-clip: padding;\
                        background-clip: padding-box;\
                        border: 3px solid rgba( 255,255,255,0) !important;\
                        background: rgba( 0,0,0,.2) !important;\
                        background-clip: content-box !important;\
                    }\
                    .a-scrollbar-fill::-webkit-scrollbar-corner,\
                    .a-scrollbar-fill-auto::-webkit-scrollbar-corner,\
                    .a-scrollbar-fill-hover::-webkit-scrollbar-corner {\
                        background: transparent !important;\
                    }\
                    .a-scrollbar-fill::-webkit-scrollbar-thumb:vertical:active,\
                    .a-scrollbar-fill-auto::-webkit-scrollbar-thumb:vertical:active,\
                    .a-scrollbar-fill-hover::-webkit-scrollbar-thumb:vertical:active {\
                        border-radius: 0 !important;\
                        border-left-width: 0 !important;\
                        border-right-width: 0 !important;\
                    }\
                    .a-scrollbar-fill::-webkit-scrollbar-thumb:horizontal:active,\
                    .a-scrollbar-fill-auto::-webkit-scrollbar-thumb:horizontal:active,\
                    .a-scrollbar-fill-hover::-webkit-scrollbar-thumb:horizontal:active {\
                        border-radius: 0 !important;\
                        border-top-width: 0 !important;\
                        border-bottom-width: 0 !important;\
                    }\
    ';

    var scrollbar_node = document.createElement('style');
    scrollbar_node.innerHTML = scrollbar_style_str;
    document.body.appendChild( scrollbar_node );

    // needed the scrollbar editing before measuring....
    var inner = document.createElement('p');
    inner.style.width = "100%";
    inner.style.height = "200px";

    var outer = document.createElement('div');
    outer.style.position = "absolute";
    outer.style.top = "0px";
    outer.style.left = "0px";
    outer.style.visibility = "hidden";
    outer.style.width = "200px";
    outer.style.height = "150px";
    outer.style.overflow = "hidden";
    outer.className = "a-scrollbar-fill";
    outer.appendChild (inner);

    document.body.appendChild (outer);
    var w1 = inner.offsetWidth;
    outer.style.overflow = 'scroll';
    var w2 = inner.offsetWidth;
    if (w1 == w2) w2 = outer.clientWidth;

    document.body.removeChild (outer);

    var scrollbarWidth = (w1 - w2);

    // these two don't customize scrollbars (ie11 & < are alright)
    // TODO: make this more function based at some point...
    var is_firefox = !!navigator.userAgent.match(/firefox/i);
    var is_edge = !!navigator.userAgent.match(/edge/i);

    var style_str = "";

    // maybe use namespaces: scbr-fill, scbr-fill-auto, scbr-fill-hover

    if ( scrollbarWidth > 0 ) {
        style_str += '.a-scrollbar-fill > * { width: calc( 100% + ' + scrollbarWidth + 'px ) !important; }';

        style_str += '.a-scrollbar-fill-hover > * { width: 100% !important; }';
        style_str += '.a-scrollbar-fill-hover:hover > * { width: calc( 100% + ' + scrollbarWidth + 'px ) !important; }';

        style_str += '.a-scrollbar-margin-right { margin-right: ' + scrollbarWidth + 'px !important; }';
    }else{
        style_str += '.a-scrollbar-fill-auto > *,.a-scrollbar-fill > *, .a-scrollbar-fill-hover > * { width: 100% !important;  }';

        style_str += '.a-scrollbar-margin-right { margin-right: 0px !important; }';
    }

    if ( is_firefox || is_edge ) {
        style_str += '.a-scrollbar-fill-auto > * { width: 100% !important; }';
        style_str += '.a-scrollbar-fill-auto { overflow-y: auto !important; overflow-x: hidden !important; }';

        style_str += '.a-scrollbar-fill-none > * { width: calc( 100% + ' + scrollbarWidth + 'px ) !important; }';
    }else{
        style_str += '.a-scrollbar-fill-auto > * { width: calc( 100% + ' + scrollbarWidth + 'px ) !important; }';
        style_str += '.a-scrollbar-fill-auto { overflow-y: scroll !important; overflow-x: hidden !important; }';

        style_str += '.a-scrollbar-fill-none > * { width: 100% !important; }';
    }

    style_str += '.a-scrollbar-fill-auto,.a-scrollbar-fill-hover,.a-scrollbar-fill { position: relative;  }';

    style_str += '.a-scrollbar-fill{ overflow-y: scroll !important; overflow-x: hidden !important; }';

    style_str += '.a-scrollbar-fill-none{ overflow-y: scroll !important; overflow-x: hidden !important; }';

    style_str += '.a-scrollbar-fill-hover { overflow-y: hidden !important; overflow-x: hidden !important; }';
    style_str += '.a-scrollbar-fill-hover:hover { overflow-y: scroll !important; overflow-x: hidden !important; }';

    var node = document.createElement('style');
    node.innerHTML = style_str;
    document.body.appendChild(node);
}

if (document.readyState != 'loading') {
    createScrollbarFill();
} else {
    document.addEventListener('DOMContentLoaded', createScrollbarFill);
}
