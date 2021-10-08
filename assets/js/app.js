function toastAnuncio(id) {
    var toastElList = [].slice.call(document.querySelectorAll(id))
    var toastList = toastElList.map(function (toastEl) {
        // Creates an array of toasts (it only initializes them)
        return new bootstrap.Toast(toastEl);
    });
    toastList.forEach(toast => toast.show()); // This show them     
    
}