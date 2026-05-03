# 🚀 DEPLOYMENT GUIDE — paulramirezmotion.com

Step-by-step para subir tu sitio y conectar tu dominio.
**Tiempo total:** ~45 minutos. No necesitas saber programar.

---

## 📋 Checklist ANTES de empezar

Debes tener:
- [ ] Cuenta en **GitHub** (github.com) — gratis, ya la creaste
- [ ] Cuenta en **Porkbun** (porkbun.com) — donde compraste `paulramirezmotion.com`
- [ ] Esta carpeta con todos los archivos del sitio
- [ ] Tus imágenes ya metidas en la carpeta `assets/` con los nombres correctos (ver `assets/README.md`)

---

## 🟢 PASO 1 — Comprar el dominio en Porkbun (5 min)

1. Ve a **porkbun.com**
2. En la barra de búsqueda escribe: `paulramirezmotion.com`
3. Si está disponible, clic en **Add to Cart**
4. IMPORTANTE antes de pagar:
   - ✅ Marca **WHOIS Privacy** (viene GRATIS en Porkbun — oculta tus datos personales del registro público)
   - ✅ Compra por **1 año** para empezar (renuevas después)
   - ❌ Rechaza los upsells de hosting, email, SSL — no los necesitas (tendrás todo gratis)
5. Crea cuenta, paga con tarjeta
6. Listo. El dominio ya es tuyo.

**Costo:** ~$11 USD (~$220 MXN)

---

## 🟢 PASO 2 — Subir el sitio a GitHub (15 min)

### 2.1 Crear el repositorio

1. Entra a **github.com** y haz login
2. Arriba a la derecha, clic en el **+** → **New repository**
3. Llena el formulario:
   - **Repository name:** `paulramirezmotion.com`
   - **Description:** `Personal portfolio` (opcional)
   - **Public** (debe ser público para GitHub Pages gratis)
   - NO marques "Add a README" ni "Add .gitignore" ni "License" — dejamos todo vacío
4. Clic en **Create repository**

### 2.2 Subir los archivos

1. En la página del repo recién creado, verás algo así como "uploading an existing file". Clic en **"uploading an existing file"** (es un link azul en medio de la pantalla).
2. Arrastra TODO el contenido de esta carpeta del sitio:
   - `index.html`
   - La carpeta `css/` completa
   - La carpeta `js/` completa
   - La carpeta `assets/` completa (con tus imágenes ya puestas)
   - `CNAME`
   - `README.md`
3. Abajo donde dice "Commit changes", escribe: `Initial site upload`
4. Clic en el botón verde **Commit changes**
5. Espera a que suba todo (puede tardar 1-2 min si las imágenes son pesadas)

### 2.3 Activar GitHub Pages

1. En tu repo, clic en **Settings** (arriba a la derecha)
2. En el menú de la izquierda, busca **Pages**
3. En **Source** → selecciona `Deploy from a branch`
4. En **Branch** → selecciona `main` y deja la carpeta en `/ (root)`
5. Clic en **Save**
6. Espera 1 minuto. Arriba aparecerá un mensaje: **"Your site is live at https://TU-USUARIO.github.io/paulramirezmotion.com/"**

🎉 Tu sitio ya está en línea, pero en una URL temporal de GitHub. Ahora lo conectamos a tu dominio real.

---

## 🟢 PASO 3 — Conectar tu dominio (15 min)

Aquí le dices a `paulramirezmotion.com` que apunte al sitio en GitHub.

### 3.1 En Porkbun: configurar DNS

1. Entra a **porkbun.com** y haz login
2. Clic en **Account** → **Domain Management**
3. Encuentra `paulramirezmotion.com` y clic en **Details** (a la derecha)
4. Busca la sección **DNS Records** y clic en **Manage DNS**
5. Verás una tabla. Borra cualquier registro que venga pre-cargado (probablemente hay uno o dos que dicen "ALIAS" o "parking").

### 3.2 Agregar los registros de GitHub

Agrega estos **5 registros** uno por uno. Clic en **Add Record** para cada uno:

**Registro 1:**
- Type: `A`
- Host: (déjalo vacío, o pon `@` si te exige algo)
- Answer: `185.199.108.153`
- TTL: `600`

**Registro 2:**
- Type: `A`
- Host: (vacío)
- Answer: `185.199.109.153`

**Registro 3:**
- Type: `A`
- Host: (vacío)
- Answer: `185.199.110.153`

**Registro 4:**
- Type: `A`
- Host: (vacío)
- Answer: `185.199.111.153`

**Registro 5 (para que `www.paulramirezmotion.com` también funcione):**
- Type: `CNAME`
- Host: `www`
- Answer: `TU-USUARIO.github.io` (reemplaza TU-USUARIO con tu usuario real de GitHub)

Clic en **Save** en cada uno.

### 3.3 En GitHub: conectar el dominio

1. Regresa a tu repo en github.com
2. **Settings** → **Pages** (izquierda)
3. En **Custom domain**, escribe: `paulramirezmotion.com`
4. Clic en **Save**
5. Marca la casilla **Enforce HTTPS** (puede tardar unos minutos en habilitarse — si aparece gris, espera 15 min y vuelve a entrar)

### 3.4 Esperar

La propagación DNS tarda entre **10 minutos y 2 horas** normalmente (en raros casos hasta 24h).

Para ver si ya funciona, entra a `https://paulramirezmotion.com` cada cierto tiempo. Cuando cargue el sitio, ¡ya está!

---

## ✅ PASO 4 — Verificar que todo funcione

Abre `paulramirezmotion.com` y revisa:

- [ ] Carga en desktop y móvil
- [ ] El reel de Vimeo se reproduce (si ya lo reemplazaste en `index.html`)
- [ ] Las imágenes de los case studies se ven (si ya las subiste a `assets/`)
- [ ] Tu foto aparece en About
- [ ] El link "Download CV" descarga el PDF
- [ ] Los links a LinkedIn / Behance / Vimeo funcionan
- [ ] El candadito verde 🔒 aparece al lado de la URL (significa que HTTPS está activo)

Si falta algo, edita los archivos correspondientes y súbelos a GitHub (puedes arrastrar archivos directamente desde la web de GitHub para reemplazar).

---

## 🛠️ Cómo hacer cambios después

**Opción fácil (directo desde GitHub.com):**
1. Ve a tu repo en github.com
2. Clic en el archivo que quieras editar (`index.html`, `css/style.css`, etc.)
3. Clic en el ícono de lápiz ✏️ arriba a la derecha
4. Edita, baja al fondo y clic en **Commit changes**
5. Los cambios aparecen en tu sitio en 30-60 segundos

**Opción pro (instalar GitHub Desktop):**
- Descarga github-desktop (gratis)
- Clona el repo en tu compu
- Edita con VS Code
- "Push" los cambios

---

## 📧 BONUS: Email con tu dominio (opcional)

Para tener `hola@paulramirezmotion.com` en vez de Gmail:

### Opción gratis: email forwarding
- En Porkbun: **Details** del dominio → **Email Forwarding**
- Configura: `hola@paulramirezmotion.com` → `paul65159f@gmail.com`
- Cualquier correo que llegue a `hola@paulramirezmotion.com` se reenvía a tu Gmail
- **Costo: $0**. Pero NO puedes *enviar* desde esa dirección, solo recibir.

### Opción completa: email real ($2 USD/mes)
- En Porkbun: **Email Hosting** ($2 USD/mes)
- Puedes enviar y recibir desde `hola@paulramirezmotion.com`
- Se ve mucho más profesional en tus CVs y firmas

---

## 🆘 Si algo sale mal

**"El sitio no carga"**
→ Verifica que GitHub Pages esté activo: repo → Settings → Pages, debe decir "Your site is live at..."
→ Verifica DNS: entra a https://dnschecker.org/ y busca `paulramirezmotion.com`, tipo A. Deben aparecer las 4 IPs de GitHub.
→ Espera más tiempo. DNS a veces tarda.

**"El dominio carga pero muestra error 404"**
→ Tu archivo `CNAME` debe contener SOLO `paulramirezmotion.com` (sin http://, sin www).
→ En GitHub → Settings → Pages → Custom domain debe decir `paulramirezmotion.com`.

**"Las imágenes no cargan"**
→ Los nombres de archivo deben coincidir EXACTAMENTE con los del HTML (case-sensitive).
→ Las imágenes deben estar en la carpeta `assets/` exactamente.

**"El HTTPS no se activa"**
→ Espera 15-30 min después de configurar el dominio, vuelve a Settings → Pages y marca "Enforce HTTPS".

---

Cualquier duda, escríbele a Claude de nuevo con el error específico y te ayuda a resolverlo.

Mucha suerte, Paul 🚀
