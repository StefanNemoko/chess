jQuery(function($){
    $(".Piece").draggable({
        cursor: "move",
        revert: true,
        appendTo: "body",
        start: function(event, ui) {
            $(this).css("z-index", $(this).css("z-index")+1);
        },
    });

    $('.Droppable').droppable({
        accept: ".Piece",
        drop: handleDropEvent
    });

    function handleDropEvent(event, ui){
        $(this).css("z-index", $(this).css("z-index")-1);
        //Reset switch
        var Switchable = 0;
        // Gets the first & second class name to know what piece is being moved
        var Pname = $(ui.draggable.get(0)).attr('class').split(' ')[0];
        var Color = $(ui.draggable.get(0)).attr('class').split(' ')[1];

        // Get the pixels required to move a cell
        var Up = {
            "min":          -38,
            "max":          -112
        };
        var Down = {
            "min":          38,
            "max":          112
        };
        var Left = {
            "min":          -54,
            "max":          -154,
        }
        var Right = {
            "min":          54,
            "max":          154
        }



        //Saves the rules for how the pieces are allowed to move

        // Pawn
        var PMovement = {
            Up: {
                "min":          Up["min"] * 1,
                "max":          Up["max"] * 1,
            },
            Down: {
                "min":          Down["min"] * 1,
                "max":          Down["max"] * 1,
            }
        }

        // Rook
        var RMovement = {
            Up: {
                "min":          Up["min"] * 1,
                "max":          Up["max"] * 7,
            },
            Down: {
                "min":          Down["min"] * 1,
                "max":          Down["max"] * 7,
            },
            Left: {
                "min":          Left["min"] * 1,
                "max":          Left["max"] * 7,
            },
            Right: {
                "min":          Right["min"] * 1,
                "max":          Right["max"] * 7,
            }
        }

        // Bishop
        var BMovement = {
            Up:{
                "min":          Up["min"] * 1,
                "max":          Up["max"] * 6,
            },
            Down:{
                "min":          Down["min"] * 1,
                "max":          Down["min"] * 6,
            },
            Left:{
                "min":          Left["min"] * 1,
                "max":          Left["max"] * 6,
            },
            Right:{
                "min":          Right["min"] * 1,
                "max":          Right["max"] * 6,
            }
        }

        // Knight
        var NMovement = {
            Up: {
                "min":          Up["min"] * 1,
                "max":          Up["max"] * 2,
            },
            Down: {
                "min":          Down["min"] * 1,
                "max":          Down["max"] * 2,
            },
            Left: {
                "min":          Left["min"] * 1,
                "max":          Left["max"] * 2,
            },
            Right: {
                "min":          Right["min"] * 1,
                "max":          Right["max"] * 2,
            }
        }

        // King
        var KMovement = {
            Up: {
                "min":          Up["min"] * 1,
                "max":          Up["max"] * 1,
            },
            Down: {
                "min":          Down["min"] * 1,
                "max":          Down["max"] * 1,
            },
            Left: {
                "min":          Left["min"] * 1,
                "max":          Left["max"] * 1,
            },
            Right: {
                "min":          Right["min"] * 1,
                "max":          Right["max"] * 1,
            }
        }

        // Queen
        var QMovement = {
            Up: {
                "min":          Up["min"] * 1,
                "max":          Up["max"] * 7,
            },
            Down: {
                "min":          Down["min"] * 1,
                "max":          Down["max"] * 7,
            },
            Left: {
                "min":          Left["min"] * 1,
                "max":          Left["max"] * 7,
            },
            Right: {
                "min":          Right["min"] * 1,
                "max":          Right["max"] * 7,
            }
        }

        // Check if the Piece is allowed to move
        switch (Pname){
            case "Pawn":
                    if(Color=="black" && ui.position["top"] - PMovement["Down"]["min"] >= 0 && ui.position["top"] - PMovement["Down"]["max"] <= 0){
                        Switchable = 1;
                    }else if(Color=="white" && ui.position["top"] - PMovement["Up"]["min"] <= 0 && ui.position["top"] - PMovement["Up"]["max"] >= 0){
                        Switchable = 1;
                    }
                break;
            case "Rook":
                // Horizontal / Vertical
                if(
                    ui.position["top"] - RMovement["Up"]["min"] <= 0 &&
                    ui.position["top"] - RMovement["Up"]["max"] >= 0 &&
                    ui.position["left"] - Right["min"] <= 0 &&
                    ui.position["left"] - Left["min"] >= 0
                    ){
                    Switchable = 1;
                }else if(
                    ui.position["top"] - RMovement["Down"]["min"] >= 0 &&
                    ui.position["top"] - RMovement["Down"]["max"] <= 0 &&
                    ui.position["left"] - Right["min"] <= 0 &&
                    ui.position["left"] - Left["min"] >= 0
                    ){
                    Switchable = 1;
                }else if(
                    ui.position["left"] - RMovement["Left"]["min"] <= 0 &&
                    ui.position["left"] - RMovement["Left"]["max"] >= 0 &&
                    ui.position["top"] - Down["min"] <= 0 &&
                    ui.position["top"] -  Up["min"] >= 0
                    ){
                    Switchable = 1;
                }else if(
                    ui.position["left"] - RMovement["Right"]["min"] >= 0 &&
                    ui.position["left"] - RMovement["Right"]["max"] <= 0 &&
                    ui.position["top"] - Down["min"] <= 0 &&
                    ui.position["top"] -  Up["min"] >= 0
                    ){
                    Switchable = 1;
                }
                break;
            case "Bishop":
                // Diagonal
                if(
                    ui.position["top"] - BMovement["Up"]["min"] <= 0 &&
                    ui.position["top"] - BMovement["Up"]["max"] >= 0 &&
                    ui.position["left"] - BMovement["Left"]["min"] <= 0 &&
                    ui.position["left"] - BMovement["Left"]["max"] >= 0 &&
                    ui.position["left"] - Right["min"] <= 0
                    ){
                    Switchable = 1;
                }else if(
                    ui.position["top"] - BMovement["Up"]["min"] <= 0 &&
                    ui.position["top"] - BMovement["Up"]["max"] >= 0 &&
                    ui.position["left"] - BMovement["Right"]["min"] >= 0 &&
                    ui.position["left"] - BMovement["Right"]["max"] <= 0 &&
                    ui.position["left"] - Left["min"] >= 0
                    ){
                    Switchable = 1;
                }else if(
                    ui.position["top"] - BMovement["Down"]["min"] >= 0 &&
                    ui.position["top"] - BMovement["Down"]["max"] <= 0 &&
                    ui.position["left"] - BMovement["Left"]["min"] <= 0 &&
                    ui.position["left"] - BMovement["Left"]["max"] >= 0 &&
                    ui.position["left"] - Right["min"] <= 0
                    ){
                    Switchable = 1;
                }else if(
                    ui.position["top"] - BMovement["Down"]["min"] >= 0 &&
                    ui.position["top"] - BMovement["Down"]["max"] <= 0 &&
                    ui.position["left"] - BMovement["Right"]["min"] >= 0 &&
                    ui.position["left"] - BMovement["Right"]["max"] <= 0 &&
                    ui.position["left"] - Left["min"] >= 0
                    ){
                    Switchable = 1;
                }
                break;
            case "Knight":
                if(
                    ui.position["top"] - NMovement["Up"]["min"] <= 0 &&
                    ui.position["top"] - NMovement["Up"]["max"] >= 0 &&
                    ui.position["left"] - Right["min"] <= 0 &&
                    ui.position["left"] - Left["min"] >= 0
                    ){
                    Switchable = 1;
                }
                break;
            case "King":
                // Horizontal / Vertical
                if(
                    ui.position["top"] - KMovement["Up"]["min"] <= 0 &&
                    ui.position["top"] - KMovement["Up"]["max"] >= 0 &&
                    ui.position["left"] - Right["min"] <= 0 &&
                    ui.position["left"] - Left["min"] >= 0
                    ){
                    Switchable = 1;
                }else if(
                    ui.position["top"] - KMovement["Down"]["min"] >= 0 &&
                    ui.position["top"] - KMovement["Down"]["max"] <= 0 &&
                    ui.position["left"] - Right["min"] <= 0 &&
                    ui.position["left"] - Left["min"] >= 0
                    ){
                    Switchable = 1;
                }else if(
                    ui.position["left"] - KMovement["Left"]["min"] <= 0 &&
                    ui.position["left"] - KMovement["Left"]["max"] >= 0 &&
                    ui.position["top"] - Down["min"] <= 0 &&
                    ui.position["top"] -  Up["min"] >= 0
                    ){
                    Switchable = 1;
                }else if(
                    ui.position["left"] - KMovement["Right"]["min"] >= 0 &&
                    ui.position["left"] - KMovement["Right"]["max"] <= 0 &&
                    ui.position["top"] - Down["min"] <= 0 &&
                    ui.position["top"] -  Up["min"] >= 0
                    ){
                    Switchable = 1;
                // Diagonal
            }else if(
                    ui.position["top"] - KMovement["Up"]["min"] <= 0 &&
                    ui.position["top"] - KMovement["Up"]["max"] >= 0 &&
                    ui.position["left"] - BMovement["Left"]["min"] <= 0 &&
                    ui.position["left"] - BMovement["Left"]["max"] >= 0 &&
                    ui.position["left"] - Right["min"] <= 0
                    ){
                    Switchable = 1;
                }else if(
                    ui.position["top"] - KMovement["Up"]["min"] <= 0 &&
                    ui.position["top"] - KMovement["Up"]["max"] >= 0 &&
                    ui.position["left"] - BMovement["Right"]["min"] >= 0 &&
                    ui.position["left"] - BMovement["Right"]["max"] <= 0 &&
                    ui.position["left"] - Left["min"] >= 0
                    ){
                    Switchable = 1;
                }else if(
                    ui.position["top"] - KMovement["Down"]["min"] >= 0 &&
                    ui.position["top"] - KMovement["Down"]["max"] <= 0 &&
                    ui.position["left"] - BMovement["Left"]["min"] <= 0 &&
                    ui.position["left"] - BMovement["Left"]["max"] >= 0 &&
                    ui.position["left"] - Right["min"] <= 0
                    ){
                    Switchable = 1;
                }else if(
                    ui.position["top"] - KMovement["Down"]["min"] >= 0 &&
                    ui.position["top"] - KMovement["Down"]["max"] <= 0 &&
                    ui.position["left"] - BMovement["Right"]["min"] >= 0 &&
                    ui.position["left"] - BMovement["Right"]["max"] <= 0 &&
                    ui.position["left"] - Left["min"] >= 0
                    ){
                    Switchable = 1;
                }
                break;
            case "Queen":
                // Horizontal / Vertical
                if(
                    ui.position["top"] - QMovement["Up"]["min"] <= 0 &&
                    ui.position["top"] - QMovement["Up"]["max"] >= 0 &&
                    ui.position["left"] - Right["min"] <= 0 &&
                    ui.position["left"] - Left["min"] >= 0
                    ){
                    Switchable = 1;
                }else if(
                    ui.position["top"] - QMovement["Down"]["min"] >= 0 &&
                    ui.position["top"] - QMovement["Down"]["max"] <= 0 &&
                    ui.position["left"] - Right["min"] <= 0 &&
                    ui.position["left"] - Left["min"] >= 0
                    ){
                    Switchable = 1;
                }else if(
                    ui.position["left"] - QMovement["Left"]["min"] <= 0 &&
                    ui.position["left"] - QMovement["Left"]["max"] >= 0 &&
                    ui.position["top"] - Down["min"] <= 0 &&
                    ui.position["top"] -  Up["min"] >= 0
                    ){
                    Switchable = 1;
                }else if(
                    ui.position["left"] - QMovement["Right"]["min"] >= 0 &&
                    ui.position["left"] - QMovement["Right"]["max"] <= 0 &&
                    ui.position["top"] - Down["min"] <= 0 &&
                    ui.position["top"] -  Up["min"] >= 0
                    ){
                    Switchable = 1;
                // Diagonal
            }else if(
                    ui.position["top"] - QMovement["Up"]["min"] <= 0 &&
                    ui.position["top"] - QMovement["Up"]["max"] >= 0 &&
                    ui.position["left"] - BMovement["Left"]["min"] <= 0 &&
                    ui.position["left"] - BMovement["Left"]["max"] >= 0 &&
                    ui.position["left"] - Right["min"] <= 0
                    ){
                    Switchable = 1;
                }else if(
                    ui.position["top"] - QMovement["Up"]["min"] <= 0 &&
                    ui.position["top"] - QMovement["Up"]["max"] >= 0 &&
                    ui.position["left"] - BMovement["Right"]["min"] >= 0 &&
                    ui.position["left"] - BMovement["Right"]["max"] <= 0 &&
                    ui.position["left"] - Left["min"] >= 0
                    ){
                    Switchable = 1;
                }else if(
                    ui.position["top"] - QMovement["Down"]["min"] >= 0 &&
                    ui.position["top"] - QMovement["Down"]["max"] <= 0 &&
                    ui.position["left"] - BMovement["Left"]["min"] <= 0 &&
                    ui.position["left"] - BMovement["Left"]["max"] >= 0 &&
                    ui.position["left"] - Right["min"] <= 0
                    ){
                    Switchable = 1;
                }else if(
                    ui.position["top"] - QMovement["Down"]["min"] >= 0 &&
                    ui.position["top"] - QMovement["Down"]["max"] <= 0 &&
                    ui.position["left"] - BMovement["Right"]["min"] >= 0 &&
                    ui.position["left"] - BMovement["Right"]["max"] <= 0 &&
                    ui.position["left"] - Left["min"] >= 0
                    ){
                    Switchable = 1;
                }
                break;
            default:
                break;

        }
        if(Switchable){
            $(this).append($(ui.draggable.get(0)));
        }
    }
});
