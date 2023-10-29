const {Shape, Triangle, Circle, Square} = require("./shapes");

//Shape test
describe('Shape', () => {
    it('should set the shapes color', () => {
        const shape = new Shape();
        shape.setColor('orange');
        expect(shape.color).toEqual('orange');
    });
});


//Triangle Test
describe('Triangle', () => {
    it('should create a blue triangle', () => {
        const shape = new Triangle();
        var color = 'blue';
        shape.setColor(color);
        expect(shape.render()).toEqual(`<polygon points="150,50 50,150 250,150" style="fill:${color}"/>`)
    });

});

//Circle Test
describe('Circle', () => {
    it('should create a red circle', () => {
        const shape = new Circle();
        var color = ('red');
        shape.setColor(color);
        expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="75" style="fill:${color}"/>`);
    });
});

//Square Test
describe('Square', () => {
    it('should create a green square', () => {
        const shape = new Square();
        var color = ('green');
        shape.setColor(color);
        expect(shape.render()).toEqual(`<rect x="50" y="50" width="200" height="200" style="fill:${color}"/>`);
    });
});