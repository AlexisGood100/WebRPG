function disableButtons(btnNodeList, duration){
    btnNodeList.forEach((button)=>{
        button.disabled = true;
    })
    setTimeout(()=>{
        btnNodeList.forEach((button)=>{
            button.disabled = false;
        })
    }, duration)
}