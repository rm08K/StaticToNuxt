window.onload = function () {
    const openTarget = document.getElementById('openNav');
    openTarget.addEventListener('click', function () {
        document.getElementById('topNav').classList.add('open');
        console.log('open');
    }, false);
    const closeTarget = this.document.getElementById('closeNav')
    closeTarget.addEventListener('click', function(){
        document.getElementById('topNav').classList.remove('open');
        console.log('close');
    }, false);
}