$(document).ready(function() {
    const $today = $('#today')
    let date = moment();

    const $timeBlocks = $('.timeblocks')

    $today.text(date.format('[current date and time >] MMMM Do YYYY, h:mm a'))

    const businessHours = ['8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm']
    $.each(businessHours,function(key,value){
        //create html elements
        const $timeRow = $('<div>').addClass('row')
        $timeBlocks.append($timeRow)
        
        const $timeDiv = $('<div>').text(value).addClass('time') 
        
        const $iconBtn = $('<i>').addClass('fa fa-save')
        
        const $event = $('<textArea>').addClass('textarea').attr('value', value)
        
        const $submitBtn = $('<button>').addClass('svBtn').append($iconBtn)
        //appending created elements to parent container
        $timeRow.append($timeDiv, $event, $submitBtn)  
        // comparing times in array to current time and applying styling accordingly
        const endTime = moment(value, "hA");
        if($event.isBefore(endTime)){
            $event.css('background-color', 'green')
        }else if($today.format('hA') === $timeDiv.text()){
                    $event.css('background-color', 'red')
        }else{
            $event.css('background-color', 'gray').attr('readonly', true)
        }  
        //local storage
        //setting the text for each time block
        function storeEvent() {
            localStorage.setItem(value, $event.val());
        }
        //running the function when the save button is clicked
        $submitBtn.on('click', function(){
            storeEvent()
         })
         // retreiving events from local storage and rendering them to their correct time-blocks
         function getEvent(){
            const item = localStorage.getItem(value)
            $event.text(item)
        } 
        getEvent()
    })
})




