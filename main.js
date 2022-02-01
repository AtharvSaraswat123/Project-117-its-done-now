sketch="";
function setup(){
    canvas=createCanvas(280, 280);
    canvas.center();
    background("white");
}
quick_draw_data_set = ['book', 'pencil', 'paper', 'bottle', 'alarm', 'apple', 'banana'];
random_no = Math.floor((Math.random() * quick_draw_data_set.length) + 1);
console.log(quick_draw_data_set[random_no]);
sketch=quick_draw_data_set[random_no];
document.getElementById("sketch_to_be_drawn").innerHTML="Sketch To be Drawn"+sketch;
timer_counter=0;
timer_check="";
drawn_sketch="";
answer_holder="";
score=0;