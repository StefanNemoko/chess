<template>
    <div class="container">
        <div class="col-md-12">
            <div class="card mx-auto">
                <!-- <div class="card-header">Example Component</div> -->
                <div class="card-body bg-khaki">
                    <HorizontalRow/>
                    <div class="row">
                        <div class="col">
                            <BlackRow row="1" startrow="true" />
                            <WhiteRow row="2" pawnrow="true"/>
                            <BlackRow row="3"/>
                            <WhiteRow row="4"/>
                            <BlackRow row="5"/>
                            <WhiteRow row="6"/>
                            <BlackRow row="7" pawnrow="true"/>
                            <WhiteRow row="8" startrow="true"/>
                        </div>
                    </div>
                    <HorizontalRow/>
                </div>
            </div>
        </div>
    </div>
</template>

<script >
import WhiteRow from './Board/WhiteRow'
import BlackRow from './Board/BlackRow'
import HorizontalRow from './Board/HorizontalRow'

export default {
    name: 'App',
    components:{
        WhiteRow,
        BlackRow,
        HorizontalRow,
    }
}
</script>

