const i=e=>({props:{closeOnClickOutside:{type:Boolean,default:!0}},data(){return{clickOutsideHandler:t=>{this.closeOnClickOutside&&!this.$el.contains(t.target)&&this[e.method]()}}},mounted(){document.addEventListener(e.event,this.clickOutsideHandler)},beforeDestroy(){document.removeEventListener(e.event,this.clickOutsideHandler)}}),n=i;export{n as c};
