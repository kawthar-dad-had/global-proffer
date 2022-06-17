<template>
        <div class="container mt-5">
            <h3> Lot1</h3>
            <hr>
            <h5 class="mt-3 mb-4">Poser une soumission:</h5>
            <div class="row justify-content-center">
                <div class="col-xl-10">
                    <!-- entreprise details card-->
                    <div class="card mb-4">
                        <div class="card-body">
                            <form>
                                <!-- Form Row-->
                                <div class="row gx-3 mb-3">
                                    <!-- Form Group (CahierCharge)-->
                                    <div class="col-md-6">
                                        <label class="small mb-1" for="inputName">Cahier de charges</label>
                                        <input class="form-control" id="inputCahierCharge" type="file" placeholder="Entez le nom de votre entreprise" value="ESi">
                                        
                                    </div>
                                    <div class="col-md-6">
                                        <label class="small mb-1" for="inputName">Extrait de Role</label>
                                        <input class="form-control" id="inputExtraitRole" type="file" placeholder="Entez le nom de votre entreprise" value="ESi">
                                        
                                    </div>
                                </div>
                                <div class="row gx-3 mb-3">
                                    <!-- Form Group (qualification)-->
                                    <div class="col-md-6">
                                        <label class="small mb-1" for="inputQualification">Qualification</label>
                                        <div class="input-group mb-3">
                                            <input type="text" class="form-control" id="inputQualification" >
                                        </div>
                                    </div>

                                    <div class="col-md-6">
                                        <label class="small mb-1" for="inputDelai">Estimation de date finition:</label>
                                        <input class="form-control" id="inputDelai" type="date" placeholder="YYYY-MM-DD">
                                    </div>
                                    <!-- Form Group (type)-->

                                </div>
                                <!-- Form Row        -->
                                <div class="row gx-3 mb-3">
                                    <!-- Form Group (registre)-->
                                    <div class="col-md-6">
                                        <label class="small mb-1" for="inputnbMaterial">Nb Materiel</label>
                                        <div class="input-group mb-3">
                                            <input type="number" class="form-control" id="inputnbMaterial" placeholder="Entrez la quantité du materiel">
                                            <div class="input-group-append">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <label class="small mb-1" for="inputnbSalaries">Nb Salaries</label>
                                        <div class="input-group mb-3">
                                            <input type="number" class="form-control" id="inputnbSalaries" placeholder="Entrez la nombre des salariés">
                                            <div class="input-group-append">
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                                <!-- Form Group (codes)-->
                                
                                <!-- Form Row-->
                                <div class="row gx-3 mb-3">
                                    <!-- Form Group (CNAS)-->
                                    <div class="col-md-6">
                                        <label class="small mb-1" for="inputNIF">Matricule CNAS</label>
                                        <div class="input-group mb-3">
                                            <input class="form-control" id="inputCNAS" type="number" placeholder="Entez votre matricule CNAS">
                                            <div class="input-group-append">
                                            </div>
                                        </div>
                                    
                                    </div>
                                    <!-- Form Group (PRIX))-->
                                    <div class="col-md-6">
                                        <label class="small mb-1" for="inputNIS">Prix</label>
                                        
                                        <div class="input-group mb-3">
                                            <input type="number" class="form-control" id="inputPrix" placeholder="Saisisser le prix de votre soumission" >
                                            <div class="input-group-append">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                               
                                
                                <!-- submit btn-->
                                
                                <div class="d-flex justify-content-center">
                                <input class="btn color-custom-2 " type="submit" value="Valider">
                                </div>
                            </form>
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
            .color-custom-2{
            /* fallback for old browsers */
            background: #FA7D09;
            color: white;
      
            /* Chrome 10-25, Safari 5.1-6 */
            background: -webkit-linear-gradient(to right, rgb(250, 125, 9), rgb(255, 67, 1));
      
            /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
            background: linear-gradient(to right, rgb(250, 125, 9), rgb(255, 67, 1))
            }
            label{
                color:#FA7D09
            }
</style>
