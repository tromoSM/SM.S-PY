/*
                                   _________  ________  ________  _____ ______   ________  ________  _____ ______                                        
                                  |\___   ___\\   __  \|\   __  \|\   _ \  _   \|\   __  \|\   ____\|\   _ \  _   \                                      
                                  \|___ \  \_\ \  \|\  \ \  \|\  \ \  \\\__\ \  \ \  \|\  \ \  \___|\ \  \\\__\ \  \                                     
                                       \ \  \ \ \   _  _\ \  \\\  \ \  \\|__| \  \ \  \\\  \ \_____  \ \  \\|__| \  \                                    
                                        \ \  \ \ \  \\  \\ \  \\\  \ \  \    \ \  \ \  \\\  \|____|\  \ \  \    \ \  \                                   
                                         \ \__\ \ \__\\ _\\ \_______\ \__\    \ \__\ \_______\____\_\  \ \  \    \ \  \                                  
                                          \|__|  \|__|\|__|\|_______|\|__|     \|__|\|_______|\_________\ |__|    \ |__|                          
                                                                                             \|_________|_|__|     \|__|                                               
                                                                                                                                                         
                                                                                                                                                         
                                           
                                                                                                                                                         
*/    
document.querySelectorAll(`[fill="usual"]`).forEach(dih=>{
  if (dih.innerHTML=="Username: "){
   dih.title="Username of the device."
  }
  else{
    if(dih.innerHTML=="Device name : "){
     dih.title="Name of the device"    
    }
    else{
      if(dih.innerHTML=="Operating system : "){
        dih.title="Operating system of the device"
      }
      else{
        if(dih.innerHTML=="System version : "){
          dih.title="Version of the operating system"
        }
        else{
          if(dih.innerHTML=="Architecture : "){
            dih.title="Processor architecture is the design and structure of a computer’s central processing unit (CPU)."
          }
          else{
            if(dih.textContent=="Processor : "){
              dih.title="Central processing unit (CPU), the hardware within a computer that executes a program "
            }
            else{
              if(dih.innerHTML.toUpperCase()=="PRIVATE IP ADDRESS : "){
                dih.title="A private IP address is used within a local network to identify devices internally."
              }
              else{
                if(dih.innerHTML.toLowerCase()=="public ip address : "){
                  dih.title=`A public IP address is assigned to a device or network by an Internet Service Provider (ISP) and is used to identify it on the wider internet. It is globally unique and allows communication between devices across different networks.`
                }
                else{
                  if(dih.innerHTML=="IP Version : "){
                    dih.title="Internet Protocol version"
                  }
                  else{
                    if(dih.textContent=="Location"){
                      dih.title="Location of the device. Accuracy : IP "
                    }
                    else{
                      if(dih.textContent=="Geographic coordinate : "){
                       dih.title="Geograpic coordinates of the device. Accuracy : IP " 
                      }
                      else{
                        if(dih.innerHTML=="Default language : "){
                          dih.title="Default language preference of the user."
                        }
                        else{
                          if(dih.innerHTML=="SSID : "){
                            dih.title="The service set identifier (SSID) defines or extends a service set. Normally it is broadcast in the clear by stations in beacon packets to announce the presence of a network and seen by users as a wireless network name. "
                          }
                          else{
                            if(dih.innerHTML=="Network strength : "){
                              dih.title="Network strength represents the quality or intensity of a device’s connection to a network."
                            }
                            else{
                              if(dih.innerHTML=="Network security protocol : "){
                                dih.title="Security protocol used in the connection."
                              }
                              else{
                                if(dih.innerHTML=="Network transmit rate : "){
                                  dih.title="Network data transmit rate (mbps)"
                                }
                                else{
                                  if(dih.textContent=="Network requests : "){
                                    dih.title="Network requests made during the SM.$PY runtime."
                                  }
                                  else{
                                    if(dih.innerHTML=="GUID : "){
                                      dih.title="A universally unique identifier (UUID) is a 128-bit number designed to be a unique identifier for objects in computer systems that use the standard but being also unique and large enough as to avoid random collisions with external number comparisons."
                                    }
                                    else{
                                      if(dih.innerHTML=="Memory : "){
                                        dih.title="Memory usage during SM.$PY runtime."
                                      }
                                      else{
                                        if(dih.innerHTML=="Disk : "){
                                          dih.title="Disk usage during SM.$PY"
                                        }
                                        else{
                                          if(dih.innerHTML=="System uptime :  "){
                                            dih.title="How much the has been continuously working and available (in hours). "
                                          }
                                          else{
                                            if(dih.innerHTML=='SM.$PY runtime :  '){
                                              dih.title="The time SM.$PY ran for (in seconds)"
                                            }
                                            else{
                                              dih.title=dih.innerHTML
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

 }
  )
