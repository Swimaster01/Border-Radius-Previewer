import './style.css';

const preview = document.getElementById('preview');

const topLeft = document.getElementById('top-left');
const topRight = document.getElementById('top-right');
const bottomLeft = document.getElementById('bottom-left');
const bottomRight = document.getElementById('bottom-right');
const cssOutput = document.getElementById('css-output');
const copyBtn = document.getElementById('copy-btn');

topLeft.addEventListener('input', function(){

    preview.style.borderTopLeftRadius = topLeft.value + 'px';
    updateCSS();
});

topRight.addEventListener('input', function(){
    preview.style.borderTopRightRadius = topRight.value + 'px';
    updateCSS();
});

bottomLeft.addEventListener('input', function(){
    preview.style.borderBottomLeftRadius = bottomLeft.value + 'px';
    updateCSS();
});

bottomRight.addEventListener('input',function(){
    preview.style.borderBottomRightRadius = bottomRight.value + 'px';
    updateCSS();
});

function updateCSS() {
    const topLeftValue = topLeft.value;
    const topRightValue = topRight.value;
    const bottomLeftValue = bottomLeft.value;
    const bottomRightValue = bottomRight.value;

    const css = `border-radius: ${topLeftValue}px ${topRightValue}px ${bottomRightValue}px ${bottomLeftValue}px;`;

    cssOutput.textContent = css;
}

copyBtn.addEventListener('click', function(){
    navigator.clipboard.writeText(cssOutput.textContent);
})
