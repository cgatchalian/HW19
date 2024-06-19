console.log("Your index.js file is loaded correctly!");
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classlist.add('show');
        } else {
            entry.target.classlist.remove('show');
        }
    });
});
const hiddenElements = document.querySelectorAll ('.hidden');
hiddenElements.forEach((el) => observer.observe(el));