const url = "https://project5-ew0a.onrender.com";

const container = document.querySelector(".row");

async function getTasks() {
  const response = await fetch(url);
  const data = await response.json();
  data.results.forEach((task) => {
    container.innerHTML += renderTask(task);
  });
}

getTasks();

// const getTasks = async () => {}

function renderTask(task) {
  return `
    <div class="col-12 mt-4">
        <input type="text" name="username" class="form-control" />
    </div>
    <div class="col-12 mt-3">
        <input type="password" name="password" class="form-control" />
    </div>
    <div class="col-12 d-grid mt-3">
        <button type="submit" class="btn btn-outline-secondary">
            Iniciar
        </button>
        <a href="/register/" type="submit" class="btn btn-outline-secondary mt-2">
            Crear Cuenta
        </a>
    </div>
  `;
}