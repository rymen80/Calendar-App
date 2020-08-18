$(document).ready(function() {
    const $today = $('#today')
    let date = moment();
    console.log(date);
    $today.text(date.format('[current date and time >] MMMM Do YYYY, h:mm a'));
    

    const $timeBlocks = $('.timeblocks');

    

    const businessHours = [{schedule : "8am", moment: "08:00"},{schedule : "9am", moment: "09:00"},{schedule : "10am", moment: "10:00"},{schedule : "11am", moment: "11:00"},{schedule : "12pm", moment: "12:00"},{schedule : "1pm", moment: "13:00"},{schedule : "2pm", moment: "14:00"},{schedule : "3pm", moment: "15:00"},{schedule : "4pm", moment: "16:00"}];
    console.log(businessHours);
    
        businessHours.forEach(function(value){
        //create html elements

        console.log(value.schedule);
        const $timeDiv = $('<div>').addClass('row');
        const $timeRow = $('<div>').text(value.schedule).addClass('time');
        $timeBlocks.append($timeDiv,$timeRow);

        

        const $event = $('<textArea>').addClass('textarea');
       
        const $iconBtn = $('<i>').addClass('fa fa-save');
        
        const $submitBtn = $('<button>').addClass('svBtn').append($iconBtn);

        // //appending created elements to parent container
        $timeRow.append($timeDiv, $event, $submitBtn);  
    //     // comparing times in array to current time and applying styling accordingly
        const past = moment(value.moment,"H:m");
        console.log(past);
        const momentTime = date.format('H:m');
        console.log(momentTime);
        if(momentTime.isBefore(past)){
            $event.css('background-color', 'green')
        }else if(date.format('ha') === $timeRow.text()){
                    $event.css('background-color', 'red')
        }else{
            $event.css('background-color', 'gray').attr('readonly', true);
        }  
        //local storage
        //setting the text for each time block
        function storeEvent() {
            localStorage.setItem(hour, $event.val());
        }
        //running the function when the save button is clicked
        $submitBtn.on('click', function(){
            storeEvent();
         })
         // retreiving events from local storage and rendering them to their correct time-blocks
         function getEvent(){
            const item = localStorage.getItem(hour)
            $event.text(item);
        } 
        getEvent()
    })
})




