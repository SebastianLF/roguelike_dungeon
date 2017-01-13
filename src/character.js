
(function(){

  const character = function() {

    let health = 100;
    let level = 0;
    let weapon = 'knife';
    let healthItems = [];

    return {
      getWeapon: () => weapon,
      changeWeapon: newWeapon => (weapon = newWeapon),
      addHealthItem: item => healthItems.push(item)
    }
  };

  const seb = character();
  console.log(seb.getWeapon())
  seb.changeWeapon('shotgun');
  console.log(seb.getWeapon())

})();
