let countdown = 10;
display=(n,callback)=>{
    console.log("in display fun: "+ n);
    setTimeout(function(){
        if(!isNaN(n)){
            console.log(n);
            callback(null,n);
        }
        else{
            callback("invalid data","Timer Not Working");
        }
    },1000);
}
let $counter = document.getElementById('counter');
display(countdown,function(err,data){
    if(err!== null){
        $counter.innerText = `error: ${data}`;
    }
    else{
        if(data === 0){
            
            $counter.innerText = "Hi there...!!!"
        }
        else{
            $counter.innerText = data;
            data--;
            display(data,function(err,data){
                if(err!== null){
                    $counter.innerText = `error: ${data}`;
                }
                else{
                    if(data === 0){
                        
                        $counter.innerText = "Hi there...!!!"
                    }
                    else{
                        $counter.innerText = data;
                        data--;
                        display(data,function(err,data){
                            if(err!== null){
                                $counter.innerText = `error: ${data}`;
                            }
                            else{
                                if(data === 0){
                                    
                                    $counter.innerText = "Hi there...!!!"
                                }
                                else{
                                    $counter.innerText = data;
                                    data--;
                                    display(data,function(err,data){
                                        if(err!== null){
                                            $counter.innerText = `error: ${data}`;
                                        }
                                        else{
                                            if(data === 0){
                                                
                                                $counter.innerText = "Hi there...!!!"
                                            }
                                            else{
                                                $counter.innerText = data;
                                                data--;
                                                display(data,function(err,data){
                                                    if(err!== null){
                                                        $counter.innerText = `error: ${data}`;
                                                    }
                                                    else{
                                                        if(data === 0){
                                                            
                                                            $counter.innerText = "Hi there...!!!"
                                                        }
                                                        else{
                                                            $counter.innerText = data;
                                                            data--;
                                                            display(data,function(err,data){
                                                                if(err!== null){
                                                                    $counter.innerText = `error: ${data}`;
                                                                }
                                                                else{
                                                                    if(data === 0){
                                                                        
                                                                        $counter.innerText = "Hi there...!!!"
                                                                    }
                                                                    else{
                                                                        $counter.innerText = data;
                                                                        data--;
                                                                        display(data,function(err,data){
                                                                            if(err!== null){
                                                                                $counter.innerText = `error: ${data}`;
                                                                            }
                                                                            else{
                                                                                if(data === 0){
                                                                                    
                                                                                    $counter.innerText = "Hi there...!!!"
                                                                                }
                                                                                else{
                                                                                    $counter.innerText = data;
                                                                                    data--;
                                                                                    display(data,function(err,data){
                                                                                        if(err!== null){
                                                                                            $counter.innerText = `error: ${data}`;
                                                                                        }
                                                                                        else{
                                                                                            if(data === 0){
                                                                                                
                                                                                                $counter.innerText = "Hi there...!!!"
                                                                                            }
                                                                                            else{
                                                                                                $counter.innerText = data;
                                                                                                data--;
                                                                                                display(data,function(err,data){
                                                                                                    if(err!== null){
                                                                                                        $counter.innerText = `error: ${data}`;
                                                                                                    }
                                                                                                    else{
                                                                                                        if(data === 0){
                                                                                                            
                                                                                                            $counter.innerText = "Hi there...!!!"
                                                                                                        }
                                                                                                        else{
                                                                                                            $counter.innerText = data;
                                                                                                            data--;
                                                                                                            display(data,function(err,data){
                                                                                                                if(err!== null){
                                                                                                                    $counter.innerText = `error: ${data}`;
                                                                                                                }
                                                                                                                else{
                                                                                                                    if(data === 0){
                                                                                                                        
                                                                                                                        $counter.innerText = "Hi there...!!!"
                                                                                                                    }
                                                                                                                    else{
                                                                                                                        $counter.innerText = data;
                                                                                                                        data--;
                                                                                                                        display(data,function(err,data){
                                                                                                                            if(err!== null){
                                                                                                                                $counter.innerText = `error: ${data}`;
                                                                                                                            }
                                                                                                                            else{
                                                                                                                                if(data === 0){
                                                                                                                                   
                                                                                                                                   $counter.innerText = "Hi there...!!!"
                                                                                                                                }
                                                                                                                                else{
                                                                                                                                    $counter.innerText = data;
                                                                                                                                    data--;
                                                                                                                                }
                                                                                                                            }
                                                                                                                        })
                                                                                                                    }
                                                                                                                }
                                                                                                            })
                                                                                                        }
                                                                                                    }
                                                                                                })
                                                                                            }
                                                                                        }
                                                                                    })
                                                                                }
                                                                            }
                                                                        })
                                                                    }
                                                                }
                                                            })
                                                        }
                                                    }
                                                })
                                            }
                                        }
                                    })
                                }
                            }
                        })
                    }
                }
            })
        }
    }
})

