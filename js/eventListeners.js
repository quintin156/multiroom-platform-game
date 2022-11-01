window.addEventListener('keydown', (event) => {
  switch(event.key) {
    case 'w':

      if (player.velocity.y === 0)  player.velocity.y = -20
      
      break;
    case 'a':
      // move player to left
      keys.a.pressed = true
      break;
    case 'd':
      // move player to right
      keys.d.pressed = true
      
  }
})
window.addEventListener('keyup', (event) => {
  switch(event.key) {
    case 'a':
      // move player to left
      keys.a.pressed = false
      break;
    case 'd':
      // move player to right
      keys.d.pressed = false
      
  }
})