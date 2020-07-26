setInterval(function() {
    fetch('/places', {method: 'GET'})
      .then(function(response) {
        if(response.ok) return response.json()
        throw new Error('Request failed.');
      }).then(function(data) {
        const places=data
        places.forEach(x=>{
            document.getElementById(x._id.toString()).textContent=x.count
        })
      })
      .catch(function(error) {
        console.log('error');
      });
  }, 1000);

  setInterval(function() {
    fetch('/inside', {method: 'GET'})
      .then(function(response) {
        if(response.ok) return response.json()
        throw new Error('Request failed.');
      }).then(function(data) {
        const otp=data
        if(otp.active===true)
        {
          document.getElementById('generate-btn').classList.add('view')
          document.getElementById('place-list').classList.add('view')
          document.getElementById('exit-btn').classList.remove('view')
          return;
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  }, 1000); 

const exitbtn=document.getElementById('exit-btn')
exitbtn.addEventListener('click',function(){
  fetch('/exit', {method: 'DELETE'})
  .then(function(response) {
    if(response.ok)
    {
     
      document.getElementById('generate-btn').classList.remove('view')
      document.getElementById('place-list').classList.remove('view')
      document.getElementById('exit-btn').classList.add('view')
      location.reload()
      return;
    }
    throw new Error('failed.');
  })
  .catch(function(error) {
    console.log(error);
  });
})

