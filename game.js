  var config = {
   type: Phaser.AUTO,
   width: 800,
   height: 600,
   scene: {
    preload: preload,
    create: create
   }
  };

  var game = new Phaser.Game(config);

  function preload() {

  }

  function create() {
    this.dealText = this.add.text(400,300, ['DEAL']).setFontSize(18).setFontFamily('Trebuchet MS').setColor('#000fff').setInteractive();
    this.dealText.on('pointerdown', () => {this.dealCards(3)})
    this.dealText.on('pointerover', () => {
      this.dealText.setColor('#00ffff')
    });
    this.dealText.on('pointerout', () => {
      this.dealText.setColor('#000fff')
    });
    this.dealCards = (num) => {
      for (let i=0; i<num; i++){
        this.square = this.add.rectangle( 100 +(i * 150), 450, 100, 125, 0x666fff).setInteractive();
        this.input.setDraggable(this.square)
      }      
    }

    this.input.on('drag', (pointer, gameObject, dragX, dragY) => {
      gameObject.x = dragX;
      gameObject.y = dragY;
    } )

  }
