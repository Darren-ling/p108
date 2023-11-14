function startClassifier(){
    navigator.mediaDevices.getUserMedia({
        audio:true
    })
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/LRR6t5icf/model.json",modelReady)
}

function modelReady(){
    console.log("Model Loadded Succesfully")
    classifier.classify(gotResults)
}

function gotResults(error,results){
   if (error){
    console.log(error)
   } else {
    console.log(results)
    random_number_r=Math.floor(Math.random()*255);
    random_number_b=Math.floor(Math.random()*255);
    random_number_g=Math.floor(Math.random()*255);

    document.getElementById("sound_label").innerHTML="i can hear " + results[0].label
    document.getElementById("accuracy_label").innerHTML="Accurancy " + (results[0].confidence *100).toFixed(2) + "%";
  
    document.getElementById("sound_label").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")"
    document.getElementById("accuracy_label").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")"

    img1 = document.getElementById("Animals1")
    img2 = document.getElementById("Animals2")
    img3 = document.getElementById("Animals3")
    img4 = document.getElementById("Animals4")

    if(results[0].label == "meow"){
        img1.src="cartoon cat gif.gif"
        img2.src="cartoon cow.jpeg"
        img3.src="cartoon dog.jpeg"
        img4.src="cartoon lion.jpeg"
    }
    else if(results[0].label == "bark"){
        img1.src="cartoon cat.jpeg"
        img2.src="cartoon cow.jpeg"
        img3.src="cartoon dog gif.gif"
        img4.src="cartoon lion.jpeg"
    }
    else if(results[0].label == "roar"){
        img1.src="cartoon cat.jpeg"
        img2.src="cartoon cow.jpeg"
        img3.src="cartoon dog.jpeg"
        img4.src="cartoon lion gif.gif"
    }
    else {
        img1.src="cartoon cat.jpeg"
        img2.src="cartoon cow gif.gif"
        img3.src="cartoon dog.jpeg"
        img4.src="cartoon lion.jpeg"
    }
}
}
