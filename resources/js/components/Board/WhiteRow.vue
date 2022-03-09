<template>
    <div class="row">
        <div class="row white-row" v-if="startrow">
            <div class="col my-auto">
                <h3 class="text-center">{{row}}</h3>
            </div>
            <div class="col bg-beige Droppable">
                <Rook class="Rook Piece" color="white"/>
            </div>
            <div class="col bg-brown text-white Droppable">
                <Bishop class="Bishop Piece" color="white"/>
            </div>
            <div class="col bg-beige Droppable">
                <Knight class="Knight Piece" color="white"/>
            </div>
            <div class="col bg-brown text-white Droppable">
                <King class="King Piece" color="white"/>
            </div>
            <div class="col bg-beige Droppable">
                <Queen class="Queen Piece" color="white"/>
            </div>
            <div class="col bg-brown text-white Droppable">
                <Knight class="Knight Piece" color="white"/>
            </div>
            <div class="col bg-beige Droppable">
                <Bishop class="Bishop Piece" color="white"/>
            </div>
            <div class="col bg-brown text-white Droppable">
                <Rook class="Rook Piece" color="white"/>
            </div>
            <div class="col my-auto"><h3 class="text-center">{{row}}</h3></div>
        </div>
        <div class="row white-row" v-else-if="pawnrow">
            <div class="col my-auto"><h3 class="text-center">{{row}}</h3></div>
            <div class="col bg-beige Droppable">
                <Pawn class="Pawn black Piece" color="black"/>
            </div>
            <div class="col bg-brown text-white Droppable">
                <Pawn class="Pawn black Piece" color="black"/>
            </div>
            <div class="col bg-beige Droppable">
                <Pawn class="Pawn black Piece" color="black"/>
            </div>
            <div class="col bg-brown text-white Droppable">
                <Pawn class="Pawn black Piece" color="black"/>
            </div>
            <div class="col bg-beige Droppable">
                <Pawn class="Pawn black Piece" color="black"/>
            </div>
            <div class="col bg-brown text-white Droppable">
                <Pawn class="Pawn black Piece" color="black"/>
            </div>
            <div class="col bg-beige Droppable">
                <Pawn class="Pawn black Piece" color="black"/>
            </div>
            <div class="col bg-brown text-white Droppable">
                <Pawn class="Pawn black Piece" color="black"/>
            </div>
            <div class="col my-auto Droppable">
                <h3 class="text-center">{{row}}</h3>
            </div>
        </div>
        <div class="row white-row" v-else>
            <div class="col my-auto"><h3 class="text-center">
                {{row}}</h3>
            </div>
            <div class="col bg-beige column Droppable"></div>
            <div class="col bg-brown text-white column Droppable"></div>
            <div class="col bg-beige column Droppable"></div>
            <div class="col bg-brown text-white column Droppable"></div>
            <div class="col bg-beige column Droppable"></div>
            <div class="col bg-brown text-white column Droppable"></div>
            <div class="col bg-beige column Droppable"></div>
            <div class="col bg-brown text-white column Droppable"></div>
            <div class="col my-auto">
                <h3 class="text-center">{{row}}</h3>
            </div>
        </div>
    </div>
</template>
<script>
import Queen from '../Pieces/Queen'
import King from '../Pieces/King'
import Rook from '../Pieces/Rook'
import Knight from '../Pieces/Knight'
import Bishop from '../Pieces/Bishop'
import Pawn from '../Pieces/Pawn'

export default ({
    props: ['row', 'startrow', 'pawnrow'],
        components:{
        Queen,
        King,
        Rook,
        Knight,
        Bishop,
        Pawn,
    }
})
</script>
