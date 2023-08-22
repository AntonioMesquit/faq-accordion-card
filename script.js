const func = document.getElementsByClassName('box1');

for (let i = 0; i < func.length; i++) {
    func[i].addEventListener('click', function () {
        const isActive = this.classList.contains('active');
        
        for (let j = 0; j < func.length; j++) {
            func[j].classList.remove('active');
        }
    
        if (!isActive) {
            this.classList.add('active');
        }
    });
}
