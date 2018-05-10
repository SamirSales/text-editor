
window.addEventListener("load", function(){
    var editor = theWYSIWYG.document;
    editor.designMode = "on";

    boldButton.addEventListener("click", function(){
        editor.execCommand("Bold", false, null);
    }, false);

    underlinedButton.addEventListener("click", function(){
        editor.execCommand("Underline", false, null);
    }, false);

    italicButton.addEventListener("click", function(){
        editor.execCommand("Italic", false, null);
    }, false);

    supButton.addEventListener("click", function(){
        editor.execCommand("Superscript", false, null);
    }, false);

    subButton.addEventListener("click", function(){
        editor.execCommand("Subscript", false, null);
    }, false);

    strikeButton.addEventListener("click", function(){
        editor.execCommand("Strikethrough", false, null);
    }, false);

    orderedListButton.addEventListener("click", function(){
        editor.execCommand("InsertOrderedList", false, "newOL" + Math.round(Math.random() * 1000));
    }, false);

    unorderedListButton.addEventListener("click", function(){
        editor.execCommand("InsertUnorderedList", false, "newOL" + Math.round(Math.random() * 1000));
    }, false);

    fontColorButton.addEventListener("change", function(event){
        editor.execCommand("ForeColor", false, event.target.value);
    },false);

    highlightButton.addEventListener("change", function(event){
        editor.execCommand("BackColor", false, event.target.value);
    },false);

    fontChanger.addEventListener("change", function(event){
        editor.execCommand("FontName", false, event.target.value);
    }, false);

    fontSizeChanger.addEventListener("change", function(event){
        editor.execCommand("FontSize", false, event.target.value);
    }, false);

    linkButton.addEventListener("click", function(event){
        var url = prompt("Enter a URL", "http://");
        editor.execCommand("CreateLink", false, url);
    }, false);

    unlinkButton.addEventListener("click", function(){
        editor.execCommand("Unlink", false, null);
    }, false);

    undoButton.addEventListener("click", function(){
        editor.execCommand("undo", false, null);
    }, false);

    redoButton.addEventListener("click", function(){
        editor.execCommand("redo", false, null);
    }, false);
    
}, false);


var fonts = document.querySelectorAll("select#fontChanger > option");

for(var i = 0; i < fonts.length; i++){
    fonts[i].style.fontFamily = fonts[i].value;
}