function Registrar() {
    return (
        <form>
            <img class="mb-4" src="/docs/5.1/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" />
            <h1 class="h3 mb-3 fw-normal">Registrar producto</h1>

            <div class="form-floating">
                <input type="text" class="form-control" id="name" placeholder="Manzanas" />
                <label for="name">Nombre</label>
            </div>
            <div class="form-floating">
                <input type="text" class="form-control" id="description" placeholder="Frutas y verduras" />
                <label for="description">Descripción</label>
            </div>
            <div class="form-floating">
                <input type="numeric" class="form-control" id="value" placeholder="5000" />
                <label for="value">Valor</label>
            </div>

            <button class="w-100 btn btn-lg btn-primary" type="submit">Ingresar</button>
        </form>
    );
}

export default Registrar;