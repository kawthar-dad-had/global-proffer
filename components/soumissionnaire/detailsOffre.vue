<template>
        <div class="container mt-5">
            <h2>Offre1</h2>
            <hr class="mb-5">
            <h5>Journée de la décision:</h5> 
            <p>here we put offer dDay value</p>
            <h5>Les lots:</h5>
            <div class="row">
                <div class="col-lg-6">
                    <div class="card mt-3 ">
                        <div class="card-body">
                        <h2 class="card-title mb-1">lot 1</h2>
                        <p>2022-06-15</p>  
                        <a href="#" class="btn1 btn">Soumissionner</a>
                        <button class="btn btn2" data-bs-toggle="modal" data-bs-target="#CahierChargeModal">Consulter</button>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="card mt-3">
                        <div class="card-body">
                        <h2 class="card-title mb-1">lot 2</h2>
                        <p>2022-06-15</p>  
                        <a href="#" class="btn1 btn">Soumissionner</a>
                        <button class="ml-3 btn btn2" data-bs-toggle="modal" data-bs-target="#CahierChargeModal">Consulter</button>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="card mt-3">
                        <div class="card-body">
                        <h2 class="card-title mb-1">lot 2</h2>
                        <p>2022-06-15</p>  
                        <a href="#" class="btn1 btn">Soumissionner</a>
                        <button class="btn btn2" data-bs-toggle="modal" data-bs-target="#CahierChargeModal">Consulter</button>
                        </div>
                    </div>
                </div>
            </div>
        
        <div class="modal fade" id="CahierChargeModal" tabindex="-1" aria-labelledby="CahierChargeModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Registre de commerce</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <embed src="test.pdf#toolbar=0" frameborder="0" width="100%" height="400px">
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
            body{
                background-color: #f5f7fa;
            }
            .btn1 {
                background-color: #FA7D09;
                color: white;
            }
            .btn2 {
                background-color: #2F2519;
                color: white;
            }
            .card {
                box-shadow: 0 0.15rem 1.75rem 0 rgb(33 40 50 / 15%);
            }

</style>
