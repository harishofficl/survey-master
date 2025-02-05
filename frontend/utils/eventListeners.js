export default function() {
    // document.addEventListener('click', function(e) {
    //     if (e.target.tagName === 'A') {
    //     e.preventDefault();
    //     window.history.pushState(null, '', e.target.href);
    //     window.dispatchEvent(new PopStateEvent('popstate'));
    //     }
    // });
    
    // window.addEventListener('popstate', function() {
    //     document.body.innerHTML = '';
    //     document.body.innerHTML = window.location.pathname;
    // });

    document.getElementById("description-input").addEventListener("input", function() {
        this.style.height = "auto";
        this.style.height = this.scrollHeight + "px";
    });
    document.getElementById("question-input").addEventListener("input", function() {
        this.style.height = "auto";
        this.style.height = this.scrollHeight + "px";
    });



}