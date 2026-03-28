// ========================
// DICCIONARIO DE IDIOMAS (6 idiomas)
// ========================
const translations = {
  es: {
    // Menú
    menu1: "Inicio",
    menu2: "Nosotros",
    menu3: "Producto",
    menu4: "Exportación",
    menu5: "Mercado",
    menu6: "Contacto",
    menu7: "Rastreo",
    menu_comprar: "Comprar",
    cotizar: "Cotizar",
    btn_comprar: "Comprar ahora",
    btn2: "Ver producto",
    // Hero
    titulo: "Aguacate <em>Hass</em><br>de Colombia<br>al mundo",
    descripcion:
      "Producción sostenible, certificación internacional y logística directa a Europa y Asia. Del campo colombiano a tu mesa.",
    stat1_label: "Familias campesinas",
    stat2_label: "Continentes",
    stat3_label: "Hass Premium",
    // How it works
    how_title: "¿Cómo funciona?",
    step1_title: "Elige tu paquete",
    step1_desc:
      "Selecciona el volumen de aguacate que necesitas para tu negocio.",
    step2_title: "Confirmamos tu pedido",
    step2_desc: "Validamos disponibilidad y te enviamos factura electrónica.",
    step3_title: "Recibe actualizaciones",
    step3_desc:
      "Sigue tu pedido en tiempo real con nuestro sistema de rastreo.",
    step4_title: "Disfruta tu producto",
    step4_desc:
      "Aguacates frescos y certificados llegan directamente a tu país.",
    // Apoyo campesinos
    support_title: "Apoyamos a los <em>campesinos colombianos</em>",
    support_desc:
      "Trabajamos directamente con familias agricultoras del Eje Cafetero y Antioquia, garantizando precios justos, condiciones dignas y prácticas sostenibles que cuidan la tierra y sus comunidades.",
    // Quiénes somos
    q1: "Quiénes somos",
    qdesc:
      "Somos una empresa colombiana dedicada a la producción y exportación de aguacate Hass premium, con compromiso social y ambiental.",
    q2: "Misión",
    q2d: "Brindar aguacate de la más alta calidad internacional, con procesos sostenibles que benefician a las familias campesinas colombianas.",
    q3: "Visión",
    q3d: "Ser el principal proveedor colombiano de aguacate Hass para los mercados de Europa y Asia para 2030.",
    q4: "Valores",
    q4d: "Compromiso, calidad, sostenibilidad, comercio justo y profundo respeto por el campo colombiano y sus gentes.",
    parallax_title: "Del corazón de Tolima<br>al mundo entero",
    parallax_desc:
      "Nuestras fincas están ubicadas entre 1,500 y 2,200 metros sobre el nivel del mar, donde el clima perfecto crea el aguacate Hass más aromático y cremoso del planeta.",
    camp_title: "El corazón de nuestro negocio",
    camp_desc1:
      "Detrás de cada aguacate hay una familia campesina colombiana que madruga cada día para cosechar el mejor fruto. Nosotros somos el puente entre su trabajo y el mundo.",
    camp_desc2:
      "Pagamos precios justos, garantizamos compra toda la temporada y apoyamos la educación de sus hijos a través de nuestro programa de responsabilidad social.",
    // Producto
    p1: "Aguacate Hass Premium",
    pdesc:
      "Cultivado con estándares internacionales de calidad en las tierras altas de Colombia. Sabor, textura y frescura incomparables.",
    p2: "Calidad Premium",
    p2d: "Seleccionado manualmente bajo estrictos estándares de exportación. Cada aguacate pasa por control de calidad antes de empacar.",
    p3: "Exportación Global",
    p3d: "Envíos constantes a Alemania, China, Japón, Francia y más. Cadena de frío garantizada durante todo el trayecto.",
    p4: "Producción Sostenible",
    p4d: "Cultivo sin pesticidas dañinos. Procesos que respetan el medio ambiente y las comunidades locales de Colombia.",
    // Proceso de exportación
    proceso_title: "Proceso de Exportación",
    step_proc1: "Cosecha",
    step_proc1d:
      "Selección manual en finca con control estricto de madurez. Solo los mejores frutos avanzan.",
    step_proc2: "Empaque",
    step_proc2d:
      "Empaque certificado para exportación internacional con identificación de trazabilidad.",
    step_proc3: "Transporte",
    step_proc3d:
      "Logística internacional refrigerada, rastreable en tiempo real por GPS.",
    step_proc4: "Entrega",
    step_proc4d:
      "Llegada a puerto y distribución local eficiente con confirmación por email.",
    carousel_title: "Nuestra finca y proceso",
    // Mercados
    mercado_title: "Mercados Internacionales",
    mercado_alemania: "Alemania",
    mercado_alemania_desc:
      "Principal destino europeo con demanda constante todo el año.",
    mercado_china: "China",
    mercado_china_desc:
      "Mercado de 1.4B de personas con consumo creciente de aguacate.",
    mercado_japon: "Japón",
    mercado_japon_desc:
      "Alta exigencia de calidad premium. Consumidores sofisticados.",
    mercado_francia: "Francia",
    mercado_francia_desc:
      "Gastronomía de alto nivel y alta rotación en supermercados.",
    // Catálogo / Comprar
    catalogo: "Catálogo de Exportación",
    prod1: "1 Tonelada",
    prod1_desc:
      "Ideal para importadores pequeños. 1.000 Kg de aguacate Hass premium.",
    prod2: "5 Toneladas",
    prod2_desc:
      "Para distribuidores y supermecados. 5.000 Kg con maximo descuento.",
    prod3: "10 Toneladas",
    prod3_desc:
      "Para grandes distribuidores y supermecados. 10.000 Kg con maximo descuento.",
    add: "Añadir al carrito",
    // Carrito
    cart_title: "🛒 Mi Carrito",
    cart_total: "Total:",
    checkout: "Finalizar compra",
    close: "Cerrar",
    remove: "Eliminar",
    country_selector: "🌍 País de destino:",
    shipping_time: "Tiempo estimado de envío:",
    fullname_label: "Nombre completo:",
    fullname_placeholder: "Ej: Juan Pérez",
    payment_label: "Método de pago:",
    email_label: "Correo para factura:",
    terms_accept: "Acepto los términos y condiciones",
    payment_nequi: "Nequi",
    payment_daviplata: "Daviplata",
    payment_bancolombia: "Bancolombia",
    payment_card: "Tarjeta crédito/débito",
    empty_cart: "Tu carrito está vacío",
    order_created: "✅ ¡Pedido creado! Tu número de seguimiento es: ",
    // Rastreo
    tracking_title: "Rastreo de Pedido",
    tracking_desc:
      "Ingresa tu número de pedido para ver el estado actual de tu envío en tiempo real.",
    tracking_placeholder: "Ej: GGC-123456",
    tracking_btn: "Rastrear",
    order_not_found: "❌ Número de pedido no encontrado.",
    order_status_pending: "🟡 Pendiente",
    order_status_processing: "🟠 En preparación",
    order_status_shipped: "🟢 En tránsito",
    order_status_delivered: "✅ Entregado",
    // Contacto
    contact_title: "Contáctanos",
    contact_desc:
      "¿Tienes preguntas sobre precios, volúmenes o logística? Escríbenos y respondemos en menos de 24 horas.",
    contact_name: "Nombre completo",
    contact_email_placeholder: "Correo electrónico",
    contact_send: "Enviar mensaje",
    contact_or: "O contáctanos directamente:",
    // Ubicación, pagos, footer
    location_title: "Nuestra ubicación",
    location_desc:
      "Finca principal en Antioquia, Colombia · Exportamos desde el Puerto de Cartagena",
    payment_title: "Métodos de pago",
    payment_subtitle: "Aceptamos:",
    privacy_title: "Política de Privacidad",
    privacy_content:
      "Green Gold Colombia se compromete a proteger la privacidad de sus usuarios y clientes conforme a la Ley 1581 de 2012 de Colombia (Protección de Datos Personales) y el Reglamento General de Protección de Datos (GDPR) de la Unión Europea. Datos que recopilamos: Nombre, correo electrónico, país de destino, y datos de la transacción comercial. Finalidad: Procesamiento de pedidos, emisión de facturas electrónicas, comunicaciones comerciales y seguimiento de envíos. Compartición: No compartimos tus datos con terceros sin tu consentimiento expreso, excepto con operadores logísticos para la gestión de entregas. Derechos: Tienes derecho a acceder, rectificar, cancelar y oponerte al tratamiento de tus datos personales escribiendo a: privacidad@greengoldcolombia.com. Cookies: Usamos cookies técnicas esenciales para el funcionamiento de la página.",
    contact_whatsapp: "WhatsApp",
    contact_email: "Correo electrónico",
    back_to_top: "↑",
    discount_period: "🔥 Descuento temporal 5%",
    discount_bulk: "🎉 Descuento por volumen 10%",
    // Estados de seguimiento
    step_pending: "Pedido creado",
    step_processing: "En preparación",
    step_shipped: "En tránsito",
    step_delivered: "Entregado",
    Navegacion: "Navegacion",
    Green_Gold_C: "Green Gold Colombia",
    texto_fotter:
      "Exportadores de aguacate Hass premium desde el corazón de Colombia al mundo. Comprometidos con la calidad, la sostenibilidad y el bienestar de nuestras familias campesinas.",
  },
  en: {
    menu1: "Home",
    menu2: "About Us",
    menu3: "Product",
    menu4: "Export",
    menu5: "Market",
    menu6: "Contact",
    menu7: "Tracking",
    menu_comprar: "Buy",
    cotizar: "Quote",
    btn_comprar: "Buy now",
    btn2: "View product",
    titulo: "Hass <em>Avocado</em><br>from Colombia<br>to the world",
    descripcion:
      "Sustainable production, international certification and direct logistics to Europe and Asia. From the Colombian countryside to your table.",
    stat1_label: "Farming families",
    stat2_label: "Continents",
    stat3_label: "Hass Premium",
    how_title: "How it works?",
    step1_title: "Choose your package",
    step1_desc: "Select the volume of avocado you need for your business.",
    step2_title: "We confirm your order",
    step2_desc: "We validate availability and send you an electronic invoice.",
    step3_title: "Receive updates",
    step3_desc: "Track your order in real time with our tracking system.",
    step4_title: "Enjoy your product",
    step4_desc: "Fresh, certified avocados arrive directly to your country.",
    support_title: "Supporting <em>Colombian farmers</em>",
    support_desc:
      "We work directly with farming families from the Coffee Region and Antioquia, guaranteeing fair prices, dignified conditions and sustainable practices that care for the land and their communities.",
    q1: "About Us",
    qdesc:
      "We are a Colombian company dedicated to the production and export of premium Hass avocado, with social and environmental commitment.",
    q2: "Mission",
    q2d: "To provide the highest quality international avocado, with sustainable processes that benefit Colombian farming families.",
    q3: "Vision",
    q3d: "To be the main Colombian supplier of Hass avocado for the European and Asian markets by 2030.",
    q4: "Values",
    q4d: "Commitment, quality, sustainability, fair trade and deep respect for the Colombian countryside and its people.",
    parallax_title: "From the heart of the Tolima<br>to the whole world",
    parallax_desc:
      "Our farms are located between 1,500 and 2,200 meters above sea level, where the perfect climate creates the most aromatic and creamy Hass avocado on the planet.",
    camp_title: "The heart of our business",
    camp_desc1:
      "Behind each avocado there is a Colombian farming family that gets up early every day to harvest the best fruit. We are the bridge between their work and the world.",
    camp_desc2:
      "We pay fair prices, guarantee purchase throughout the season and support the education of their children through our social responsibility program.",
    p1: "Hass Avocado Premium",
    pdesc:
      "Grown with international quality standards in the highlands of Colombia. Unmatched flavor, texture and freshness.",
    p2: "Premium Quality",
    p2d: "Handpicked under strict export standards. Each avocado goes through quality control before packing.",
    p3: "Global Export",
    p3d: "Constant shipments to Germany, China, Japan, France and more. Cold chain guaranteed throughout the journey.",
    p4: "Sustainable Production",
    p4d: "Cultivation without harmful pesticides. Processes that respect the environment and local communities in Colombia.",
    proceso_title: "Export Process",
    step_proc1: "Harvest",
    step_proc1d:
      "Manual selection on the farm with strict ripeness control. Only the best fruits go forward.",
    step_proc2: "Packing",
    step_proc2d:
      "Certified packaging for international export with traceability identification.",
    step_proc3: "Transport",
    step_proc3d:
      "Refrigerated international logistics, trackable in real time by GPS.",
    step_proc4: "Delivery",
    step_proc4d:
      "Arrival at port and efficient local distribution with email confirmation.",
    carousel_title: "Our farm and process",
    mercado_title: "International Markets",
    mercado_alemania: "Germany",
    mercado_alemania_desc:
      "Main European destination with constant demand all year round.",
    mercado_china: "China",
    mercado_china_desc:
      "Market of 1.4B people with growing avocado consumption.",
    mercado_japon: "Japan",
    mercado_japon_desc:
      "High quality premium requirement. Sophisticated consumers.",
    mercado_francia: "France",
    mercado_francia_desc:
      "High-end gastronomy and high turnover in supermarkets.",
    catalogo: "Export Catalog",
    prod1: "1 Ton",
    prod1_desc: "Ideal for small importers. 1.000 kg of premium Hass avocados.",
    prod2: "5 Tons",
    prod2_desc:
      "For distributors and supermarkets. 5.000 kg with maximum discount.",
    prod3: "10 Tons",
    prod3_desc:
      "For large distributors and supermarkets. 10.000 kg with maximum discount.",
    add: "Add to cart",
    cart_title: "🛒 My Cart",
    cart_total: "Total:",
    checkout: "Checkout",
    close: "Close",
    remove: "Remove",
    country_selector: "🌍 Destination country:",
    shipping_time: "Estimated shipping time:",
    fullname_label: "Full name:",
    fullname_placeholder: "Ex: John Doe",
    payment_label: "Payment method:",
    email_label: "Invoice email:",
    terms_accept: "I accept the terms and conditions",
    payment_nequi: "Nequi",
    payment_daviplata: "Daviplata",
    payment_bancolombia: "Bancolombia",
    payment_card: "Credit/Debit card",
    empty_cart: "Your cart is empty",
    order_created: "✅ Order created! Your tracking number is: ",
    tracking_title: "Order Tracking",
    tracking_desc:
      "Enter your order number to see the current status of your shipment in real time.",
    tracking_placeholder: "Ex: GGC-123456",
    tracking_btn: "Track",
    order_not_found: "❌ Order number not found.",
    order_status_pending: "🟡 Pending",
    order_status_processing: "🟠 Preparing",
    order_status_shipped: "🟢 In transit",
    order_status_delivered: "✅ Delivered",
    contact_title: "Contact us",
    contact_desc:
      "Do you have questions about prices, volumes or logistics? Write to us and we will respond in less than 24 hours.",
    contact_name: "Full name",
    contact_email_placeholder: "Email",
    contact_send: "Send message",
    contact_or: "Or contact us directly:",
    location_title: "Our location",
    location_desc:
      "Main farm in Antioquia, Colombia · We export from the Port of Cartagena",
    payment_title: "Payment methods",
    payment_subtitle: "We accept:",
    privacy_title: "Privacy Policy",
    privacy_content:
      "Green Gold Colombia is committed to protecting the privacy of its users and clients in accordance with Law 1581 of 2012 of Colombia (Personal Data Protection) and the General Data Protection Regulation (GDPR) of the European Union. Data we collect: Name, email, destination country, and transaction data. Purpose: Order processing, issuance of electronic invoices, commercial communications and shipment tracking. Sharing: We do not share your data with third parties without your express consent, except with logistics operators for delivery management. Rights: You have the right to access, rectify, cancel and object to the processing of your personal data by writing to: privacidad@greengoldcolombia.com. Cookies: We use essential technical cookies for the operation of the website.",
    contact_whatsapp: "WhatsApp",
    contact_email: "Email",
    back_to_top: "↑",
    discount_period: "🔥 Temporary 5% discount",
    discount_bulk: "🎉 Volume discount 10%",
    step_pending: "Order created",
    step_processing: "Preparing",
    step_shipped: "In transit",
    step_delivered: "Delivered",
    Navegacion: "Navigation",
    Green_Gold_C: "Green Gold Colombia",
    texto_fotter:
      "Exporters of premium Hass avocados from the heart of Colombia to the world. Committed to quality, sustainability, and the well-being of our farming families.",
  },
  de: {
    menu1: "Startseite",
    menu2: "Über uns",
    menu3: "Produkt",
    menu4: "Export",
    menu5: "Markt",
    menu6: "Kontakt",
    menu7: "Sendungsverfolgung",
    menu_comprar: "Kaufen",
    cotizar: "Angebot anfordern",
    btn_comprar: "Jetzt kaufen",
    btn2: "Produkt ansehen",
    titulo: "Hass <em>Avocado</em><br>aus Kolumbien<br>in die Welt",
    descripcion:
      "Nachhaltige Produktion, internationale Zertifizierung und direkte Logistik nach Europa und Asien. Vom kolumbianischen Feld auf Ihren Tisch.",
    stat1_label: "Bauernfamilien",
    stat2_label: "Kontinente",
    stat3_label: "Hass Premium",
    how_title: "Wie funktioniert es?",
    step1_title: "Wählen Sie Ihr Paket",
    step1_desc:
      "Wählen Sie die Menge der Avocado, die Sie für Ihr Geschäft benötigen.",
    step2_title: "Wir bestätigen Ihre Bestellung",
    step2_desc:
      "Wir prüfen die Verfügbarkeit und senden Ihnen eine elektronische Rechnung.",
    step3_title: "Erhalten Sie Updates",
    step3_desc:
      "Verfolgen Sie Ihre Bestellung in Echtzeit mit unserem Trackingsystem.",
    step4_title: "Genießen Sie Ihr Produkt",
    step4_desc:
      "Frische, zertifizierte Avocados werden direkt in Ihr Land geliefert.",
    support_title: "Unterstützung <em>kolumbianischer Bauern</em>",
    support_desc:
      "Wir arbeiten direkt mit Bauernfamilien aus der Kaffeezone und Antioquia zusammen und garantieren faire Preise, würdige Bedingungen und nachhaltige Praktiken, die das Land und ihre Gemeinschaften schützen.",
    q1: "Über uns",
    qdesc:
      "Wir sind ein kolumbianisches Unternehmen, das sich der Produktion und dem Export von Premium-Hass-Avocados mit sozialem und ökologischem Engagement widmet.",
    q2: "Mission",
    q2d: "Bereitstellung von international hochwertigen Avocados mit nachhaltigen Prozessen, die kolumbianischen Bauernfamilien zugutekommen.",
    q3: "Vision",
    q3d: "Bis 2030 der wichtigste kolumbianische Lieferant von Hass-Avocados für die europäischen und asiatischen Märkte zu sein.",
    q4: "Werte",
    q4d: "Engagement, Qualität, Nachhaltigkeit, fairer Handel und tiefer Respekt für die kolumbianische Landschaft und ihre Menschen.",
    parallax_title: "Aus dem Herzen von Tolima<br>in die ganze Welt",
    parallax_desc:
      "Unsere Farmen liegen zwischen 1.500 und 2.200 Metern über dem Meeresspiegel, wo das perfekte Klima die aromatischste und cremigste Hass-Avocado der Welt hervorbringt.",
    camp_title: "Das Herz unseres Geschäfts",
    camp_desc1:
      "Hinter jeder Avocado steht eine kolumbianische Bauernfamilie, die jeden Tag früh aufsteht, um die beste Frucht zu ernten. Wir sind die Brücke zwischen ihrer Arbeit und der Welt.",
    camp_desc2:
      "Wir zahlen faire Preise, garantieren den Kauf während der gesamten Saison und unterstützen die Bildung ihrer Kinder durch unser Programm zur sozialen Verantwortung.",
    p1: "Hass Avocado Premium",
    pdesc:
      "Angebaut mit internationalen Qualitätsstandards in den Hochländern Kolumbiens. Unvergleichlicher Geschmack, Textur und Frische.",
    p2: "Premium-Qualität",
    p2d: "Handverlesen nach strengen Exportstandards. Jede Avocado wird vor dem Verpacken einer Qualitätskontrolle unterzogen.",
    p3: "Globaler Export",
    p3d: "Ständige Lieferungen nach Deutschland, China, Japan, Frankreich und mehr. Gekühlte Kette während der gesamten Reise garantiert.",
    p4: "Nachhaltige Produktion",
    p4d: "Anbau ohne schädliche Pestizide. Prozesse, die die Umwelt und die lokalen Gemeinschaften in Kolumbien respektieren.",
    proceso_title: "Exportprozess",
    step_proc1: "Ernte",
    step_proc1d:
      "Manuelle Auswahl auf der Farm mit strenger Reifekontrolle. Nur die besten Früchte kommen weiter.",
    step_proc2: "Verpackung",
    step_proc2d:
      "Zertifizierte Verpackung für den internationalen Export mit Rückverfolgbarkeitskennzeichnung.",
    step_proc3: "Transport",
    step_proc3d:
      "Gekühlte internationale Logistik, in Echtzeit per GPS verfolgbar.",
    step_proc4: "Lieferung",
    step_proc4d:
      "Ankunft im Hafen und effiziente lokale Verteilung mit Bestätigung per E-Mail.",
    carousel_title: "Unsere Farm und unser Prozess",
    mercado_title: "Internationale Märkte",
    mercado_alemania: "Deutschland",
    mercado_alemania_desc:
      "Hauptziel in Europa mit konstanter Nachfrage das ganze Jahr über.",
    mercado_china: "China",
    mercado_china_desc:
      "Markt von 1,4 Milliarden Menschen mit wachsendem Avocado-Konsum.",
    mercado_japon: "Japan",
    mercado_japon_desc:
      "Hohe Anforderungen an Premium-Qualität. Anspruchsvolle Verbraucher.",
    mercado_francia: "Frankreich",
    mercado_francia_desc:
      "Hochwertige Gastronomie und hohe Umsätze in Supermärkten.",
    catalogo: "Exportkatalog",
    prod1: "1 Tonne",
    prod1_desc: "Ideal für kleine Importeure. 1.000 kg Premium-Hass-Avocados",
    prod2: "5 Tonnen",
    prod2_desc:
      "Für Großhändler und Supermärkte. 10.000 kg mit maximalem Rabatt.",
    prod3: "10 Tonnen",
    prod3_desc:
      "Für große Großhändler und Supermärkte. 10.000 kg mit maximalem Rabatt.",
    add: "In den Warenkorb",
    cart_title: "🛒 Mein Warenkorb",
    cart_total: "Gesamt:",
    checkout: "Zur Kasse",
    close: "Schließen",
    remove: "Entfernen",
    country_selector: "🌍 Zielland:",
    shipping_time: "Voraussichtliche Lieferzeit:",
    fullname_label: "Vollständiger Name:",
    fullname_placeholder: "Z.B.: Juan Pérez",
    payment_label: "Zahlungsmethode:",
    email_label: "E-Mail für Rechnung:",
    terms_accept: "Ich akzeptiere die Allgemeinen Geschäftsbedingungen",
    payment_nequi: "Nequi",
    payment_daviplata: "Daviplata",
    payment_bancolombia: "Bancolombia",
    payment_card: "Kredit-/Debitkarte",
    empty_cart: "Ihr Warenkorb ist leer",
    order_created: "✅ Bestellung erstellt! Ihre Sendungsnummer lautet: ",
    tracking_title: "Sendungsverfolgung",
    tracking_desc:
      "Geben Sie Ihre Bestellnummer ein, um den aktuellen Status Ihrer Sendung in Echtzeit zu sehen.",
    tracking_placeholder: "Z.B.: GGC-123456",
    tracking_btn: "Verfolgen",
    order_not_found: "❌ Bestellnummer nicht gefunden.",
    order_status_pending: "🟡 Ausstehend",
    order_status_processing: "🟠 In Vorbereitung",
    order_status_shipped: "🟢 Unterwegs",
    order_status_delivered: "✅ Zugestellt",
    contact_title: "Kontaktieren Sie uns",
    contact_desc:
      "Haben Sie Fragen zu Preisen, Mengen oder Logistik? Schreiben Sie uns, wir antworten innerhalb von 24 Stunden.",
    contact_name: "Vollständiger Name",
    contact_email_placeholder: "E-Mail",
    contact_send: "Nachricht senden",
    contact_or: "Oder kontaktieren Sie uns direkt:",
    location_title: "Unser Standort",
    location_desc:
      "Hauptfarm in Antioquia, Kolumbien · Wir exportieren vom Hafen Cartagena aus",
    payment_title: "Zahlungsmethoden",
    payment_subtitle: "Wir akzeptieren:",
    privacy_title: "Datenschutzerklärung",
    privacy_content:
      "Green Gold Colombia verpflichtet sich, die Privatsphäre seiner Nutzer und Kunden gemäß dem Gesetz 1581 von 2012 Kolumbiens (Schutz personenbezogener Daten) und der Datenschutz-Grundverordnung (DSGVO) der Europäischen Union zu schützen. Erhobene Daten: Name, E-Mail, Zielland und Transaktionsdaten. Zweck: Auftragsabwicklung, Ausstellung elektronischer Rechnungen, kommerzielle Kommunikation und Sendungsverfolgung. Weitergabe: Wir geben Ihre Daten ohne Ihre ausdrückliche Zustimmung nicht an Dritte weiter, außer an Logistikdienstleister für die Lieferverwaltung. Rechte: Sie haben das Recht, auf Ihre personenbezogenen Daten zuzugreifen, sie zu berichtigen, zu löschen und der Verarbeitung zu widersprechen, indem Sie an privacidad@greengoldcolombia.com schreiben. Cookies: Wir verwenden essentielle technische Cookies für den Betrieb der Website.",
    contact_whatsapp: "WhatsApp",
    contact_email: "E-Mail",
    back_to_top: "↑",
    discount_period: "🔥 Zeitlicher Rabatt 5%",
    discount_bulk: "🎉 Mengenrabatt 10%",
    step_pending: "Bestellung erstellt",
    step_processing: "In Vorbereitung",
    step_shipped: "Unterwegs",
    step_delivered: "Zugestellt",
    Navegacion: "Navigation",
    Green_Gold_C: "Green Gold Colombia",
    texto_fotter:
      "Exporteure von Premium-Hass-Avocados aus dem Herzen Kolumbiens in die ganze Welt. Wir setzen uns für Qualität, Nachhaltigkeit und das Wohlergehen unserer Bauernfamilien ein.",
  },

  fr: {
    menu1: "Accueil",
    menu2: "À propos",
    menu3: "Produit",
    menu4: "Exportation",
    menu5: "Marché",
    menu6: "Contact",
    menu7: "Suivi",
    menu_comprar: "Acheter",
    cotizar: "Devis",
    btn_comprar: "Acheter maintenant",
    btn2: "Voir le produit",
    titulo: "Avocat <em>Hass</em><br>de Colombie<br>au monde",
    descripcion:
      "Production durable, certification internationale et logistique directe vers l'Europe et l'Asie. Des champs colombiens à votre table.",
    stat1_label: "Familles paysannes",
    stat2_label: "Continents",
    stat3_label: "Hass Premium",
    how_title: "Comment ça fonctionne ?",
    step1_title: "Choisissez votre pack",
    step1_desc:
      "Sélectionnez le volume d'avocat dont vous avez besoin pour votre entreprise.",
    step2_title: "Nous confirmons votre commande",
    step2_desc:
      "Nous vérifions la disponibilité et vous envoyons une facture électronique.",
    step3_title: "Recevez des mises à jour",
    step3_desc:
      "Suivez votre commande en temps réel avec notre système de suivi.",
    step4_title: "Profitez de votre produit",
    step4_desc:
      "Des avocats frais et certifiés arrivent directement dans votre pays.",
    support_title: "Soutenir les <em>paysans colombiens</em>",
    support_desc:
      "Nous travaillons directement avec des familles d'agriculteurs de l'Eje Cafetero et d'Antioquia, garantissant des prix justes, des conditions dignes et des pratiques durables qui prennent soin de la terre et de leurs communautés.",
    q1: "À propos",
    qdesc:
      "Nous sommes une entreprise colombienne dédiée à la production et à l'exportation d'avocat Hass premium, avec un engagement social et environnemental.",
    q2: "Mission",
    q2d: "Fournir des avocats de la plus haute qualité internationale, avec des processus durables qui bénéficient aux familles paysannes colombiennes.",
    q3: "Vision",
    q3d: "Devenir le principal fournisseur colombien d'avocat Hass pour les marchés européen et asiatique d'ici 2030.",
    q4: "Valeurs",
    q4d: "Engagement, qualité, durabilité, commerce équitable et profond respect pour la campagne colombienne et ses habitants.",
    parallax_title: "Du cœur de Tolima<br>au monde entier",
    parallax_desc:
      "Nos fermes sont situées entre 1 500 et 2 200 mètres d'altitude, où le climat parfait crée l'avocat Hass le plus aromatique et crémeux de la planète.",
    camp_title: "Le cœur de notre activité",
    camp_desc1:
      "Derrière chaque avocat se trouve une famille paysanne colombienne qui se lève tôt chaque jour pour récolter le meilleur fruit. Nous sommes le pont entre leur travail et le monde.",
    camp_desc2:
      "Nous payons des prix équitables, garantissons l'achat toute la saison et soutenons l'éducation de leurs enfants à travers notre programme de responsabilité sociale.",
    p1: "Avocat Hass Premium",
    pdesc:
      "Cultivé selon les normes internationales de qualité dans les hautes terres de Colombie. Saveur, texture et fraîcheur inégalées.",
    p2: "Qualité Premium",
    p2d: "Sélectionné à la main selon des normes d'exportation strictes. Chaque avocat subit un contrôle qualité avant d'être emballé.",
    p3: "Exportation mondiale",
    p3d: "Envois constants vers l'Allemagne, la Chine, le Japon, la France et plus encore. Chaîne du froid garantie pendant tout le trajet.",
    p4: "Production durable",
    p4d: "Culture sans pesticides nocifs. Des processus qui respectent l'environnement et les communautés locales de Colombie.",
    proceso_title: "Processus d'exportation",
    step_proc1: "Récolte",
    step_proc1d:
      "Sélection manuelle à la ferme avec contrôle strict de la maturité. Seuls les meilleurs fruits sont retenus.",
    step_proc2: "Emballage",
    step_proc2d:
      "Emballage certifié pour l'exportation internationale avec identification de traçabilité.",
    step_proc3: "Transport",
    step_proc3d:
      "Logistique internationale réfrigérée, traçable en temps réel par GPS.",
    step_proc4: "Livraison",
    step_proc4d:
      "Arrivée au port et distribution locale efficace avec confirmation par email.",
    carousel_title: "Notre ferme et notre processus",
    mercado_title: "Marchés internationaux",
    mercado_alemania: "Allemagne",
    mercado_alemania_desc:
      "Première destination européenne avec une demande constante toute l'année.",
    mercado_china: "Chine",
    mercado_china_desc:
      "Marché de 1,4 milliard de personnes avec une consommation croissante d'avocat.",
    mercado_japon: "Japon",
    mercado_japon_desc:
      "Exigence élevée de qualité premium. Consommateurs sophistiqués.",
    mercado_francia: "France",
    mercado_francia_desc:
      "Gastronomie de haut niveau et rotation élevée dans les supermarchés.",
    catalogo: "Catalogue d'exportation",
    prod1: "1 tonne",
    prod1_desc:
      "Idéal pour les petits importateurs. 1.000 kg d’avocats Hass de qualité supérieure.",
    prod2: "5 tonnes",
    prod2_desc:
      "Pour les distributeurs et les supermarchés. 5.000 kg avec remise maximale.",
    prod3: "10 tonnes",
    prod3_desc:
      "Pour les grands distributeurs et les supermarchés. 10.000 kg avec remise maximale.",
    add: "Ajouter au panier",
    cart_title: "🛒 Mon Panier",
    cart_total: "Total:",
    checkout: "Valider",
    close: "Fermer",
    remove: "Supprimer",
    country_selector: "🌍 Pays de destination:",
    shipping_time: "Délai de livraison estimé:",
    fullname_label: "Nom complet:",
    fullname_placeholder: "Ex: Juan Pérez",
    payment_label: "Moyen de paiement:",
    email_label: "Email pour la facture:",
    terms_accept: "J'accepte les termes et conditions",
    payment_nequi: "Nequi",
    payment_daviplata: "Daviplata",
    payment_bancolombia: "Bancolombia",
    payment_card: "Carte de crédit/débit",
    empty_cart: "Votre panier est vide",
    order_created: "✅ Commande créée ! Votre numéro de suivi est : ",
    tracking_title: "Suivi de commande",
    tracking_desc:
      "Entrez votre numéro de commande pour voir l'état actuel de votre envoi en temps réel.",
    tracking_placeholder: "Ex: GGC-123456",
    tracking_btn: "Suivre",
    order_not_found: "❌ Numéro de commande introuvable.",
    order_status_pending: "🟡 En attente",
    order_status_processing: "🟠 En préparation",
    order_status_shipped: "🟢 En transit",
    order_status_delivered: "✅ Livré",
    contact_title: "Contactez-nous",
    contact_desc:
      "Vous avez des questions sur les prix, les volumes ou la logistique ? Écrivez-nous, nous répondons en moins de 24 heures.",
    contact_name: "Nom complet",
    contact_email_placeholder: "Email",
    contact_send: "Envoyer le message",
    contact_or: "Ou contactez-nous directement :",
    location_title: "Notre emplacement",
    location_desc:
      "Ferme principale à Antioquia, Colombie · Nous exportons depuis le port de Carthagène",
    payment_title: "Moyens de paiement",
    payment_subtitle: "Nous acceptons :",
    privacy_title: "Politique de confidentialité",
    privacy_content:
      "Green Gold Colombia s'engage à protéger la vie privée de ses utilisateurs et clients conformément à la loi 1581 de 2012 de Colombie (Protection des données personnelles) et au Règlement général sur la protection des données (RGPD) de l'Union européenne. Données collectées : Nom, email, pays de destination et données de transaction. Finalité : Traitement des commandes, émission de factures électroniques, communications commerciales et suivi des envois. Partage : Nous ne partageons pas vos données avec des tiers sans votre consentement exprès, sauf avec les opérateurs logistiques pour la gestion des livraisons. Droits : Vous avez le droit d'accéder, de rectifier, d'annuler et de vous opposer au traitement de vos données personnelles en écrivant à : privacidad@greengoldcolombia.com. Cookies : Nous utilisons des cookies techniques essentiels au fonctionnement du site.",
    contact_whatsapp: "WhatsApp",
    contact_email: "Email",
    back_to_top: "↑",
    discount_period: "🔥 Réduction temporaire 5%",
    discount_bulk: "🎉 Réduction de volume 10%",
    step_pending: "Commande créée",
    step_processing: "En préparation",
    step_shipped: "En transit",
    step_delivered: "Livré",
    Navegacion: "Navigation",
    Green_Gold_C: "Green Gold Colombia",
    texto_fotter:
      "Exportateurs d'avocats Hass premium du cœur de la Colombie vers le monde entier. Engagés en faveur de la qualité, de la durabilité et du bien-être de nos familles d'agriculteurs.",
  },
  zh: {
    menu1: "首页",
    menu2: "关于我们",
    menu3: "产品",
    menu4: "出口",
    menu5: "市场",
    menu6: "联系方式",
    menu7: "追踪",
    menu_comprar: "购买",
    cotizar: "获取报价",
    btn_comprar: "立即购买",
    btn2: "查看产品",
    titulo: "哈斯<em>牛油果</em><br>从哥伦比亚<br>走向世界",
    descripcion:
      "可持续生产，国际认证，直接物流至欧洲和亚洲。从哥伦比亚田野到您的餐桌。",
    stat1_label: "农民家庭",
    stat2_label: "大洲",
    stat3_label: "哈斯优质",
    how_title: "如何运作？",
    step1_title: "选择您的套餐",
    step1_desc: "选择您业务所需的牛油果数量。",
    step2_title: "我们确认您的订单",
    step2_desc: "我们验证可用性并向您发送电子发票。",
    step3_title: "接收更新",
    step3_desc: "通过我们的追踪系统实时跟踪您的订单。",
    step4_title: "享受您的产品",
    step4_desc: "新鲜、认证的牛油果直接送达您的国家。",
    support_title: "支持<em>哥伦比亚农民</em>",
    support_desc:
      "我们直接与咖啡区和安蒂奥基亚的农民家庭合作，保证公平价格、有尊严的条件和可持续的实践，关爱土地和他们的社区。",
    q1: "关于我们",
    qdesc:
      "我们是一家致力于生产和出口优质哈斯牛油果的哥伦比亚公司，具有社会和环境承诺。",
    q2: "使命",
    q2d: "提供最高国际品质的牛油果，通过可持续流程惠及哥伦比亚农民家庭。",
    q3: "愿景",
    q3d: "到2030年成为欧洲和亚洲市场的主要哥伦比亚哈斯牛油果供应商。",
    q4: "价值观",
    q4d: "承诺、品质、可持续性、公平贸易和对哥伦比亚乡村及其人民深深的尊重。",
    parallax_title: "來自托利馬的中心地帶<br>走向全世界",
    parallax_desc:
      "我们的农场位于海拔1500至2200米之间，完美的气候造就了全球最芳香、最柔滑的哈斯牛油果。",
    camp_title: "我们业务的核心",
    camp_desc1:
      "每个牛油果背后都有一个哥伦比亚农民家庭，他们每天早起收获最好的果实。我们是他们工作与世界之间的桥梁。",
    camp_desc2:
      "我们支付公平的价格，保证整个季节的采购，并通过我们的社会责任计划支持他们子女的教育。",
    p1: "哈斯优质牛油果",
    pdesc: "在哥伦比亚高地按照国际质量标准种植。无与伦比的风味、质地和新鲜度。",
    p2: "优质品质",
    p2d: "根据严格的出口标准手工挑选。每个牛油果在包装前都经过质量控制。",
    p3: "全球出口",
    p3d: "持续运往德国、中国、日本、法国等。全程保证冷链。",
    p4: "可持续生产",
    p4d: "不使用有害农药的种植。尊重环境和哥伦比亚当地社区的流程。",
    proceso_title: "出口流程",
    step_proc1: "收获",
    step_proc1d: "在农场进行手动筛选，严格控制成熟度。只有最好的果实才能继续。",
    step_proc2: "包装",
    step_proc2d: "经认证的国际出口包装，带有可追溯性标识。",
    step_proc3: "运输",
    step_proc3d: "冷藏国际物流，通过GPS实时追踪。",
    step_proc4: "交付",
    step_proc4d: "抵达港口并高效本地配送，通过电子邮件确认。",
    carousel_title: "我们的农场和流程",
    mercado_title: "国际市场",
    mercado_alemania: "德国",
    mercado_alemania_desc: "欧洲主要目的地，全年需求稳定。",
    mercado_china: "中国",
    mercado_china_desc: "14亿人口市场，牛油果消费增长。",
    mercado_japon: "日本",
    mercado_japon_desc: "高品质要求，消费者精致。",
    mercado_francia: "法国",
    mercado_francia_desc: "高端美食和超市高周转。",
    catalogo: "出口目录",
    prod1: "1吨",
    prod1_desc: "适合小型进口商。1.000公斤优质哈斯牛油果",
    prod2: "5吨",
    prod2_desc: "适用于分销商和超市。5.000公斤，享受最大折扣。",
    prod3: "10吨",
    prod3_desc: "适用于大型分销商和超市。10.000公斤，享受最大折扣。",
    add: "添加到购物车",
    cart_title: "🛒 我的购物车",
    cart_total: "总计:",
    checkout: "结账",
    close: "关闭",
    remove: "删除",
    country_selector: "🌍 目的地国家:",
    shipping_time: "预计运输时间:",
    fullname_label: "全名:",
    fullname_placeholder: "例如：Juan Pérez",
    payment_label: "支付方式:",
    email_label: "发票邮箱:",
    terms_accept: "我接受条款和条件",
    payment_nequi: "Nequi",
    payment_daviplata: "Daviplata",
    payment_bancolombia: "Bancolombia",
    payment_card: "信用卡/借记卡",
    empty_cart: "您的购物车是空的",
    order_created: "✅ 订单已创建！您的追踪号码是：",
    tracking_title: "订单追踪",
    tracking_desc: "输入您的订单号以实时查看货物的当前状态。",
    tracking_placeholder: "例如：GGC-123456",
    tracking_btn: "追踪",
    order_not_found: "❌ 未找到订单号。",
    order_status_pending: "🟡 待处理",
    order_status_processing: "🟠 准备中",
    order_status_shipped: "🟢 运输中",
    order_status_delivered: "✅ 已送达",
    contact_title: "联系我们",
    contact_desc:
      "对价格、数量或物流有疑问？给我们写信，我们将在24小时内回复。",
    contact_name: "全名",
    contact_email_placeholder: "电子邮件",
    contact_send: "发送消息",
    contact_or: "或直接联系我们：",
    location_title: "我们的位置",
    location_desc: "哥伦比亚安蒂奥基亚省主要农场 · 我们从卡塔赫纳港出口",
    payment_title: "支付方式",
    payment_subtitle: "我们接受：",
    privacy_title: "隐私政策",
    privacy_content:
      "Green Gold Colombia 承诺根据哥伦比亚 2012 年第 1581 号法律（个人数据保护）和欧盟通用数据保护条例 (GDPR) 保护其用户和客户的隐私。我们收集的数据：姓名、电子邮件、目的地国家和交易数据。目的：订单处理、电子发票开具、商业通信和发货跟踪。共享：未经您的明确同意，我们不会与第三方共享您的数据，但为管理交付的物流运营商除外。权利：您有权通过写信至 privacidad@greengoldcolombia.com 访问、更正、取消和反对处理您的个人数据。Cookies：我们使用网站运行所必需的基本技术 cookies。",
    contact_whatsapp: "WhatsApp",
    contact_email: "电子邮件",
    back_to_top: "↑",
    discount_period: "🔥 临时5%折扣",
    discount_bulk: "🎉 批量10%折扣",
    step_pending: "订单已创建",
    step_processing: "准备中",
    step_shipped: "运输中",
    step_delivered: "已送达",
    Navegacion: "瀏覽",
    Green_Gold_C: "哥倫比亞綠金",
  },
  ja: {
    menu1: "ホーム",
    menu2: "会社概要",
    menu3: "製品",
    menu4: "輸出",
    menu5: "市場",
    menu6: "お問い合わせ",
    menu7: "追跡",
    menu_comprar: "購入",
    cotizar: "見積もり依頼",
    btn_comprar: "今すぐ購入",
    btn2: "製品を見る",
    titulo: "ハス<em>アボカド</em><br>コロンビアから<br>世界へ",
    descripcion:
      "持続可能な生産、国際認証、欧州・アジアへの直接物流。コロンビアの畑からあなたの食卓へ。",
    stat1_label: "農家家族",
    stat2_label: "大陸",
    stat3_label: "ハスプレミアム",
    how_title: "仕組みは？",
    step1_title: "パッケージを選択",
    step1_desc: "お客様のビジネスに必要なアボカドの量を選択してください。",
    step2_title: "注文確認",
    step2_desc: "在庫を確認し、電子請求書をお送りします。",
    step3_title: "更新情報を受け取る",
    step3_desc: "追跡システムでリアルタイムに注文を追跡できます。",
    step4_title: "製品をお楽しみください",
    step4_desc: "新鮮で認証されたアボカドが直接お客様の国に届きます。",
    support_title: "コロンビアの<em>農家を支援</em>",
    support_desc:
      "コーヒー地域とアンティオキアの農家と直接協力し、公正な価格、尊厳ある条件、土地とコミュニティを守る持続可能な慣行を保証しています。",
    q1: "会社概要",
    qdesc:
      "私たちは、社会的・環境的責任を持つ、ハスアボカドの生産と輸出に特化したコロンビアの企業です。",
    q2: "使命",
    q2d: "コロンビアの農家に利益をもたらす持続可能なプロセスで、最高の国際品質のアボカドを提供すること。",
    q3: "ビジョン",
    q3d: "2030年までに、欧州とアジア市場における主要なコロンビア産ハスアボカド供給業者となること。",
    q4: "価値観",
    q4d: "責任、品質、持続可能性、公正な取引、コロンビアの農村とその人々への深い敬意。",
    parallax_title: "トリマの中心部から<br>世界中へ",
    parallax_desc:
      "私たちの農場は標高1,500～2,200メートルに位置し、完璧な気候が世界で最も香り高くクリーミーなハスアボカドを生み出します。",
    camp_title: "私たちのビジネスの心臓部",
    camp_desc1:
      "すべてのアボカドの背後には、最高の果実を収穫するために毎日早起きするコロンビアの農家家族がいます。私たちは彼らの仕事と世界との架け橋です。",
    camp_desc2:
      "公正な価格の支払い、シーズン全体の購入保証、社会的責任プログラムを通じた彼らの子供たちの教育支援を行っています。",
    p1: "ハスアボカド プレミアム",
    pdesc:
      "コロンビア高地で国際品質基準に従って栽培。比類のない風味、食感、新鮮さ。",
    p2: "プレミアム品質",
    p2d: "厳格な輸出基準に基づき手選別。各アボカドは包装前に品質検査を受けます。",
    p3: "グローバル輸出",
    p3d: "ドイツ、中国、日本、フランスなどへ安定供給。輸送中はコールドチェーンを保証。",
    p4: "持続可能な生産",
    p4d: "有害な農薬を使わない栽培。コロンビアの環境と地域社会を尊重するプロセス。",
    proceso_title: "輸出プロセス",
    step_proc1: "収穫",
    step_proc1d: "農場での手選別、熟度を厳しく管理。最高の果実のみを選定。",
    step_proc2: "包装",
    step_proc2d: "国際輸出用の認証済み包装、トレーサビリティ識別付き。",
    step_proc3: "輸送",
    step_proc3d: "冷蔵国際物流、GPSでリアルタイム追跡可能。",
    step_proc4: "配送",
    step_proc4d: "港到着後、効率的な現地配送、メールで確認。",
    carousel_title: "私たちの農場とプロセス",
    mercado_title: "国際市場",
    mercado_alemania: "ドイツ",
    mercado_alemania_desc: "ヨーロッパの主要目的地、年間を通じて安定した需要。",
    mercado_china: "中国",
    mercado_china_desc: "14億人の市場、アボカド消費が拡大中。",
    mercado_japon: "日本",
    mercado_japon_desc: "高品質プレミアムへの要求。洗練された消費者。",
    mercado_francia: "フランス",
    mercado_francia_desc: "高級美食、スーパーでの回転率が高い。",
    catalogo: "輸出カタログ",
    prod1: "1トン",
    prod1_desc: "小規模輸入業者に最適。プレミアムハスアボカド1.000kg。",
    prod2: "5トン",
    prod2_desc: "卸売業者およびスーパーマーケット向け。最大割引価格の5.000kg。",
    prod3: "10トン",
    prod3_desc:
      "大規模卸売業者およびスーパーマーケット向け。最大割引価格の10.000kg。",
    add: "カートに追加",
    cart_title: "🛒 カート",
    cart_total: "合計:",
    checkout: "購入手続き",
    close: "閉じる",
    remove: "削除",
    country_selector: "🌍 送り先国:",
    shipping_time: "推定配送時間:",
    fullname_label: "氏名:",
    fullname_placeholder: "例：Juan Pérez",
    payment_label: "お支払い方法:",
    email_label: "請求書送付先メール:",
    terms_accept: "利用規約に同意します",
    payment_nequi: "Nequi",
    payment_daviplata: "Daviplata",
    payment_bancolombia: "Bancolombia",
    payment_card: "クレジット/デビットカード",
    empty_cart: "カートは空です",
    order_created: "✅ 注文が作成されました！追跡番号: ",
    tracking_title: "注文追跡",
    tracking_desc:
      "注文番号を入力して、配送の現在の状況をリアルタイムで確認してください。",
    tracking_placeholder: "例: GGC-123456",
    tracking_btn: "追跡",
    order_not_found: "❌ 注文番号が見つかりません。",
    order_status_pending: "🟡 保留中",
    order_status_processing: "🟠 準備中",
    order_status_shipped: "🟢 輸送中",
    order_status_delivered: "✅ 配達済み",
    contact_title: "お問い合わせ",
    contact_desc:
      "価格、数量、物流についてご質問がありますか？お問い合わせください。24時間以内に返信いたします。",
    contact_name: "氏名",
    contact_email_placeholder: "メールアドレス",
    contact_send: "送信",
    contact_or: "または直接お問い合わせ:",
    location_title: "所在地",
    location_desc:
      "コロンビア、アンティオキアのメインファーム · カルタヘナ港から輸出",
    payment_title: "お支払い方法",
    payment_subtitle: "ご利用いただけます:",
    privacy_title: "プライバシーポリシー",
    privacy_content:
      "Green Gold Colombia は、コロンビアの 2012 年法律第 1581 号（個人データ保護）および欧州連合の一般データ保護規則 (GDPR) に従い、ユーザーとクライアントのプライバシーを保護することを約束します。収集するデータ: 名前、メールアドレス、送り先国、取引データ。目的: 注文処理、電子請求書の発行、商業通信、配送追跡。共有: お客様の明示的な同意なしに、配送管理のための物流事業者を除き、第三者とデータを共有することはありません。権利: お客様は、privacidad@greengoldcolombia.com までご連絡いただくことで、個人データへのアクセス、訂正、削除、処理の拒否を行う権利を有します。Cookie: 当サイトの運営に必要な基本的な技術的 Cookie を使用します。",
    contact_whatsapp: "WhatsApp",
    contact_email: "メール",
    back_to_top: "↑",
    discount_period: "🔥 期間限定5%割引",
    discount_bulk: "🎉 数量割引10%",
    step_pending: "注文作成",
    step_processing: "準備中",
    step_shipped: "輸送中",
    step_delivered: "配達済み",
    Navegacion: "ナビゲーション",
    Green_Gold_C: "グリーンゴールド・コロンビア",
  },
};
// ========================
// DICCIONARIO DE IDIOMAS (6 idiomas)
// ========================

// ========================
// CONVERSIÓN DE MONEDA (1 USD = X moneda local)
// ========================
const exchangeRates = {
  es: { symbol: "COP", rate: 4000 },
  en: { symbol: "USD", rate: 1 },
  de: { symbol: "EUR", rate: 0.92 },
  fr: { symbol: "EUR", rate: 0.92 },
  zh: { symbol: "CNY", rate: 7.25 },
  ja: { symbol: "JPY", rate: 150 },
};

function formatPrice(usdPrice, lang) {
  const rateInfo = exchangeRates[lang] || exchangeRates.en;
  const converted = usdPrice * rateInfo.rate;
  const symbol = rateInfo.symbol;
  if (symbol === "JPY") return `${symbol} ${Math.round(converted)}`;
  if (symbol === "COP")
    return `${symbol} ${Math.round(converted).toLocaleString()}`;
  return `${symbol} ${converted.toFixed(2)}`;
}

function updatePrices() {
  const lang = document.getElementById("language").value;
  // Busca tanto .price como .product-price
  const priceElements = document.querySelectorAll(".price, .product-price");
  priceElements.forEach((el) => {
    const usd = parseFloat(el.getAttribute("data-price"));
    if (!isNaN(usd)) {
      el.innerText = formatPrice(usd, lang);
    }
  });
}

// ========================
// FUNCIONES DE IDIOMA (modificadas para actualizar precios)
// ========================
function applyTranslations(lang) {
  document.querySelectorAll("[data-translate]").forEach((el) => {
    const key = el.getAttribute("data-translate");
    if (translations[lang] && translations[lang][key]) {
      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
        if (el.placeholder) el.placeholder = translations[lang][key];
        else el.value = translations[lang][key];
      } else {
        el.innerHTML = translations[lang][key];
      }
    } else if (translations.es[key]) {
      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
        if (el.placeholder) el.placeholder = translations.es[key];
        else el.value = translations.es[key];
      } else {
        el.innerHTML = translations.es[key];
      }
    }
  });
  updatePrices(); // Actualiza los precios del catálogo
  updateCartDisplay(); // Actualiza los precios del carrito
  if (currentOrderId) displayTrackingResult(currentOrderId);
  updateShippingEstimate();
}

function changeLang() {
  const select = document.getElementById("language");
  const lang = select.value;
  localStorage.setItem("preferredLanguage", lang);
  applyTranslations(lang);
}

// ========================
// VARIABLES GLOBALES
// ========================
let cart = [];
let orders = {};
let currentOrderId = null;

// ========================
// CONTROL DE VISTAS
// ========================
function showView(viewId) {
  document
    .querySelectorAll(".view")
    .forEach((v) => v.classList.remove("active"));
  const target = document.getElementById(`view-${viewId}`);
  if (target) target.classList.add("active");
  localStorage.setItem("activeView", viewId);
  document.querySelectorAll(".menu a, [data-view]").forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("data-view") === viewId) link.classList.add("active");
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ========================
// CARRITO
// ========================
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}
function loadCart() {
  const stored = localStorage.getItem("cart");
  cart = stored ? JSON.parse(stored) : [];
  updateCartDisplay();
}

function addToCart(name, priceUSD, weight) {
  cart.push({ name, priceUSD, weight });
  saveCart();
  updateCartDisplay();
  showToast(`${name} añadido al carrito`, "success");
}

function removeFromCart(index) {
  cart.splice(index, 1);
  saveCart();
  updateCartDisplay();
}

function getTotalUSD() {
  return cart.reduce((sum, item) => sum + item.priceUSD, 0);
}

function updateCartDisplay() {
  const countSpan = document.getElementById("cart-count");
  if (countSpan) countSpan.innerText = cart.length;

  const cartList = document.getElementById("cart-list");
  const totalSpan = document.getElementById("cart-total");
  if (!cartList) return;

  const lang = document.getElementById("language").value;
  const removeText =
    (translations[lang] && translations[lang].remove) || "Eliminar";
  const emptyText =
    (translations[lang] && translations[lang].empty_cart) ||
    "Tu carrito está vacío";

  if (cart.length === 0) {
    cartList.innerHTML = `<p style="color:var(--gris);text-align:center;">${emptyText}</p>`;
    totalSpan.innerText = `$0 USD`;
    return;
  }

  cartList.innerHTML = "";
  cart.forEach((item, idx) => {
    const div = document.createElement("div");
    div.className = "cart-item";
    const formattedPrice = formatPrice(item.priceUSD, lang);
    div.innerHTML = `
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-qty">${item.weight}kg</div>
      </div>
      <div class="cart-item-price">${formattedPrice}</div>
      <button class="remove-btn" data-index="${idx}">${removeText}</button>
    `;
    cartList.appendChild(div);
  });
  document.querySelectorAll(".remove-btn").forEach((btn) => {
    btn.addEventListener("click", () =>
      removeFromCart(parseInt(btn.dataset.index)),
    );
  });
  totalSpan.innerText = formatPrice(getTotalUSD(), lang);
}

// ========================
// PEDIDOS Y RASTREO
// ========================
function saveOrders() {
  localStorage.setItem("orders", JSON.stringify(orders));
}
function loadOrders() {
  const stored = localStorage.getItem("orders");
  orders = stored ? JSON.parse(stored) : {};
}

function generateOrderId() {
  return "GGC-" + Math.floor(Math.random() * 1000000);
}

function createOrder(customerName, paymentMethod, userEmail) {
  if (cart.length === 0) return null;
  const orderId = generateOrderId();
  const totalUSD = getTotalUSD();
  const date = new Date().toISOString();
  orders[orderId] = {
    items: [...cart],
    totalUSD,
    date,
    status: "pending",
    customerName,
    paymentMethod,
    email: userEmail,
  };
  saveOrders();
  cart = [];
  saveCart();
  updateCartDisplay();
  return orderId;
}

function getOrderStatusText(statusKey) {
  const lang = document.getElementById("language").value;
  const map = {
    pending: "order_status_pending",
    processing: "order_status_processing",
    shipped: "order_status_shipped",
    delivered: "order_status_delivered",
  };
  const key = map[statusKey];
  return (translations[lang] && translations[lang][key]) || statusKey;
}

function getStepLabel(stepKey) {
  const lang = document.getElementById("language").value;
  return (translations[lang] && translations[lang][stepKey]) || stepKey;
}

function displayTrackingResult(orderId) {
  const resultDiv = document.getElementById("tracking-result");
  if (!resultDiv) return;

  const order = orders[orderId];
  if (!order) {
    const lang = document.getElementById("language").value;
    resultDiv.innerHTML = `<div class="tracking-card"><p>${translations[lang].order_not_found}</p></div>`;
    currentOrderId = null;
    return;
  }

  currentOrderId = orderId;
  const lang = document.getElementById("language").value;
  const statusText = getOrderStatusText(order.status);
  const dateFormatted = new Date(order.date).toLocaleString();

  const steps = ["pending", "processing", "shipped", "delivered"];
  const currentIndex = steps.indexOf(order.status);
  let timelineHtml = '<div class="tracking-steps">';
  steps.forEach((step, idx) => {
    let stepClass = "tracking-step";
    if (idx <= currentIndex) stepClass += " completed";
    if (idx === currentIndex && order.status !== "delivered")
      stepClass += " active";
    let stepLabel = "";
    if (step === "pending") stepLabel = getStepLabel("step_pending");
    else if (step === "processing") stepLabel = getStepLabel("step_processing");
    else if (step === "shipped") stepLabel = getStepLabel("step_shipped");
    else stepLabel = getStepLabel("step_delivered");
    timelineHtml += `
      <div class="${stepClass}">
        <div class="tracking-step-dot">${idx + 1}</div>
        <div class="tracking-step-label">${stepLabel}</div>
      </div>
    `;
  });
  timelineHtml += "</div>";

  let itemsHtml = '<ul style="margin:16px 0;padding-left:20px;">';
  order.items.forEach((item) => {
    itemsHtml += `<li>${item.name} (${item.weight}kg) - ${formatPrice(item.priceUSD, lang)}</li>`;
  });
  itemsHtml += "</ul>";

  resultDiv.innerHTML = `
    <div class="tracking-card">
      <h3 style="margin-bottom:12px;">📄 Pedido ${orderId}</h3>
      <p><strong>📅 Fecha:</strong> ${dateFormatted}</p>
      <p><strong>💰 Total:</strong> ${formatPrice(order.totalUSD, lang)}</p>
      <p><strong>📦 Estado:</strong> ${statusText}</p>
      <p><strong>🛍️ Productos:</strong></p>
      ${itemsHtml}
      ${timelineHtml}
      <hr style="margin:16px 0;">
      <p><strong>Cliente:</strong> ${order.customerName}</p>
      <p><strong>Método de pago:</strong> ${order.paymentMethod}</p>
      <p><strong>Email:</strong> ${order.email}</p>
    </div>
  `;
}

// Simulación de actualización automática de estados
function startOrderProgressSimulation() {
  setInterval(() => {
    let anyUpdated = false;
    for (let id in orders) {
      const order = orders[id];
      if (order.status === "pending") {
        order.status = "processing";
        anyUpdated = true;
      } else if (order.status === "processing") {
        order.status = "shipped";
        anyUpdated = true;
      } else if (order.status === "shipped") {
        order.status = "delivered";
        anyUpdated = true;
      }
      if (anyUpdated) {
        saveOrders();
        if (currentOrderId === id) displayTrackingResult(id);
      }
    }
  }, 10000);
}

// ========================
// TIEMPO DE ENVÍO ESTIMADO
// ========================
function updateShippingEstimate() {
  const countrySelect = document.getElementById("destination-country");
  const shippingSpan = document.getElementById("shipping-estimate");
  if (!countrySelect || !shippingSpan) return;
  const lang = document.getElementById("language").value;
  const country = countrySelect.value;
  const daysMap = {
    co: "3-5",
    de: "5-7",
    fr: "4-6",
    zh: "7-10",
    ja: "6-8",
    kr: "6-8",
    gb: "5-7",
  };
  const days = daysMap[country] || "3-10";
  shippingSpan.innerText = `${days} días hábiles`;
}

// ========================
// FORMULARIO DE CONTACTO
// ========================
/* ═══════════════════════════════════════
   EMAILJS — GREEN GOLD COLOMBIA
   Pega esto en tu javascript.js,
   reemplazando la función submitContact
   que ya tienes.
   ═══════════════════════════════════════ */

// 1️⃣  Inicializar EmailJS (ya lo tienes al final del HTML,
//     pero asegúrate de que quede ASÍ en el <script> del HTML):
//
//     emailjs.init("LQMvHwzl2rppTTt0D");
//
//  Si ya tienes emailjs.init("TU_PUBLIC_KEY") cámbialo por el de arriba.

// 2️⃣  Reemplaza tu función submitContact por esta:
function submitContact(e) {
  e.preventDefault();

  const name = document.getElementById("contact-name").value.trim();
  const email = document.getElementById("contact-email").value.trim();
  const company = document.getElementById("contact-company").value.trim();
  const country = document.getElementById("contact-country").value.trim();
  const message = document.getElementById("contact-message").value.trim();

  // Validaciones básicas
  if (!name) {
    showToast("⚠️ Ingresa tu nombre completo");
    return;
  }
  if (!email || !email.includes("@")) {
    showToast("⚠️ Ingresa un correo válido");
    return;
  }
  if (!message) {
    showToast("⚠️ Escribe tu mensaje");
    return;
  }

  // Deshabilitar botón mientras envía
  const btn = e.target.querySelector('button[type="submit"]');
  const originalText = btn.textContent;
  btn.textContent = "⏳ Enviando...";
  btn.disabled = true;

  // Parámetros que coinciden con las variables de tu plantilla EmailJS
  const templateParams = {
    name: name,
    email: email,
    company: company || "—",
    country: country || "—",
    message: message,
    time: new Date().toLocaleString("es-CO", {
      dateStyle: "full",
      timeStyle: "short",
    }),
  };

  // Enviar con EmailJS
  emailjs
    .send("service_07ofwfm", "template_8rn6pz5", templateParams)
    .then(function () {
      showToast(
        "✅ Mensaje enviado, " + name + "! Te contactaremos pronto.",
        "success",
      );
      e.target.reset();
      btn.textContent = originalText;
      btn.disabled = false;
    })
    .catch(function (error) {
      console.error("EmailJS error:", error);
      showToast(
        "❌ Error al enviar. Intenta por WhatsApp o escríbenos al email.",
        "error",
      );
      btn.textContent = originalText;
      btn.disabled = false;
    });
}

// ═══════════════════════════════════════════════
//  REEMPLAZA tu función generarFacturaPDF completa
// ═══════════════════════════════════════════════

function generarFacturaPDF(
  orderNum,
  customerName,
  customerEmail,
  items, // items del carrito: cada uno con { name, priceUSD, weight }
  totalUSD,
  destino,
  payMethod,
) {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });

  const W = 210;
  const verde = [26, 92, 26];
  const verdeOscuro = [13, 61, 13];
  const amarillo = [232, 160, 32];
  const crema = [249, 246, 239];
  const gris = [90, 106, 90];
  const negro = [17, 26, 17];

  // ── IDIOMA Y MONEDA según selector de idioma y país ──
  const lang = document.getElementById("language")?.value || "es";
  const country = document.getElementById("destination-country")?.value || "co";

  // Tasas de cambio aproximadas vs USD
  const rates = {
    co: 4000,
    de: 0.92,
    fr: 0.92,
    zh: 7.25,
    ja: 150,
    kr: 1380,
    gb: 0.79,
    en: 1,
  };
  const symbols = {
    co: "COP",
    de: "EUR",
    fr: "EUR",
    zh: "CNY",
    ja: "JPY",
    kr: "KRW",
    gb: "GBP",
    en: "USD",
  };
  const rate = rates[country] || 1;
  const symbol = symbols[country] || "USD";

  // Función para formatear precio en moneda local
  function formatPrice(usd) {
    const converted = usd * rate;
    if (["ja", "kr"].includes(country))
      return symbol + " " + Math.round(converted).toLocaleString();
    return (
      symbol +
      " " +
      converted.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })
    );
  }

  // Textos por idioma
  const txt = {
    es: {
      title: "FACTURA ELECTRÓNICA",
      client: "DATOS DEL CLIENTE",
      email: "Correo",
      dest: "Destino",
      product: "PRODUCTO",
      qty: "CANT. (kg)",
      unit: "PRECIO UNIT.",
      sub: "SUBTOTAL",
      total: "TOTAL",
      pay: "MÉTODO DE PAGO",
      ship: "TIEMPO DE ENVÍO",
      thanks: "Gracias por apoyar a los campesinos colombianos",
      thanksub:
        "Con tu compra ayudas a más de 200 familias agricultoras del Eje Cafetero y Antioquia.",
      terms: "TÉRMINOS Y CONDICIONES",
      order: "No. Pedido",
      date: "Fecha",
      t1: "- Esta factura es válida como comprobante de compra oficial.",
      t2: "- Los tiempos de envío son estimados y pueden variar.",
      t3: "- Reclamaciones: info@greengoldcolombia.com o WhatsApp.",
      currency: "Moneda",
    },
    en: {
      title: "ELECTRONIC INVOICE",
      client: "CUSTOMER INFO",
      email: "Email",
      dest: "Destination",
      product: "PRODUCT",
      qty: "QTY (kg)",
      unit: "UNIT PRICE",
      sub: "SUBTOTAL",
      total: "TOTAL",
      pay: "PAYMENT METHOD",
      ship: "SHIPPING TIME",
      thanks: "Thank you for supporting Colombian farmers",
      thanksub:
        "Your purchase helps over 200 farming families in the Colombian coffee region.",
      terms: "TERMS & CONDITIONS",
      order: "Order No.",
      date: "Date",
      t1: "- This invoice is valid as official proof of purchase.",
      t2: "- Shipping times are estimates and may vary.",
      t3: "- Claims: info@greengoldcolombia.com or WhatsApp.",
      currency: "Currency",
    },
    de: {
      title: "ELEKTRONISCHE RECHNUNG",
      client: "KUNDENDATEN",
      email: "E-Mail",
      dest: "Zielland",
      product: "PRODUKT",
      qty: "MENGE (kg)",
      unit: "STÜCKPREIS",
      sub: "ZWISCHENSUMME",
      total: "GESAMT",
      pay: "ZAHLUNGSMETHODE",
      ship: "LIEFERZEIT",
      thanks: "Danke, dass Sie kolumbianische Bauern unterstützen",
      thanksub:
        "Ihr Kauf hilft über 200 Bauernfamilien in der kolumbianischen Kaffeeregion.",
      terms: "AGB",
      order: "Bestell-Nr.",
      date: "Datum",
      t1: "- Diese Rechnung gilt als offizieller Kaufnachweis.",
      t2: "- Lieferzeiten sind Schätzungen und können variieren.",
      t3: "- Reklamationen: info@greengoldcolombia.com oder WhatsApp.",
      currency: "Währung",
    },
    fr: {
      title: "FACTURE ÉLECTRONIQUE",
      client: "DONNÉES CLIENT",
      email: "E-mail",
      dest: "Destination",
      product: "PRODUIT",
      qty: "QTÉ (kg)",
      unit: "PRIX UNIT.",
      sub: "SOUS-TOTAL",
      total: "TOTAL",
      pay: "MODE DE PAIEMENT",
      ship: "DÉLAI DE LIVRAISON",
      thanks: "Merci de soutenir les paysans colombiens",
      thanksub:
        "Votre achat aide plus de 200 familles agricoles de la région caféière.",
      terms: "CONDITIONS GÉNÉRALES",
      order: "N° Commande",
      date: "Date",
      t1: "- Cette facture est valable comme preuve officielle d'achat.",
      t2: "- Les délais de livraison sont estimatifs.",
      t3: "- Réclamations: info@greengoldcolombia.com ou WhatsApp.",
      currency: "Devise",
    },
    zh: {
      title: "电子发票",
      client: "客户信息",
      email: "邮箱",
      dest: "目的地",
      product: "产品",
      qty: "数量 (kg)",
      unit: "单价",
      sub: "小计",
      total: "总计",
      pay: "支付方式",
      ship: "预计送达时间",
      thanks: "感谢您支持哥伦比亚农民",
      thanksub: "您的购买帮助了哥伦比亚咖啡产区200多个农业家庭。",
      terms: "条款与条件",
      order: "订单号",
      date: "日期",
      t1: "- 本发票是官方购买凭证。",
      t2: "- 运输时间为估算，可能有所不同。",
      t3: "- 投诉: info@greengoldcolombia.com 或 WhatsApp。",
      currency: "货币",
    },
    ja: {
      title: "電子請求書",
      client: "顧客情報",
      email: "メール",
      dest: "目的地",
      product: "商品",
      qty: "数量 (kg)",
      unit: "単価",
      sub: "小計",
      total: "合計",
      pay: "支払い方法",
      ship: "配送時間",
      thanks: "コロンビアの農家を支援していただきありがとうございます",
      thanksub:
        "あなたの購入はコロンビアのコーヒー地域の200以上の農家を支援します。",
      terms: "利用規約",
      order: "注文番号",
      date: "日付",
      t1: "- この請求書は公式の購入証明書として有効です。",
      t2: "- 配送時間は目安であり、変動する場合があります。",
      t3: "- お問い合わせ: info@greengoldcolombia.com または WhatsApp。",
      currency: "通貨",
    },
  };

  // ← DEJA TUS TEXTOS COMO ESTÁN
  const t = txt[lang] || txt.es;

  // Tiempos de envío (igual que lo tienes)
  const tiempos = {
    co: "2-5 dias / days",
    de: "18-22 dias / Tage",
    fr: "20-24 dias / jours",
    zh: "28-35 dias / 天",
    ja: "30-38 dias / 日",
    kr: "32-40 dias",
    gb: "16-20 dias / days",
  };
  const tiempoEnvio = tiempos[country] || "2-5 dias";

  // ── HEADER (igual)
  doc.setFillColor(...verdeOscuro);
  doc.rect(0, 0, W, 52, "F");

  doc.setFillColor(255, 205, 0);
  doc.rect(0, 52, W * 0.5, 4, "F");
  doc.setFillColor(0, 48, 135);
  doc.rect(W * 0.5, 52, W * 0.25, 4, "F");
  doc.setFillColor(206, 17, 38);
  doc.rect(W * 0.75, 52, W * 0.25, 4, "F");

  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(22);
  doc.text("GREEN GOLD COLOMBIA", W / 2, 20, { align: "center" });

  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(180, 220, 180);
  doc.text("Exportacion Premium de Aguacate Hass", W / 2, 28, {
    align: "center",
  });

  doc.setDrawColor(255, 255, 255);
  doc.roundedRect(W / 2 - 40, 32, 80, 10, 5, 5, "S");
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(8);
  doc.setFont("helvetica", "bold");
  doc.text("COLOMBIA - HASS PREMIUM  |  " + symbol, W / 2, 38.5, {
    align: "center",
  });

  // ── TÍTULO ──
  doc.setFillColor(...crema);
  doc.rect(0, 56, W, 20, "F");

  doc.setTextColor(...verdeOscuro);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(15);
  doc.text(t.title, 20, 68);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(...gris);
  doc.text(t.date + ": " + new Date().toLocaleDateString(), W - 20, 63, {
    align: "right",
  });
  doc.text(t.order + ": " + orderNum, W - 20, 70, { align: "right" });

  // ── DATOS CLIENTE ──
  let y = 88;
  doc.setFillColor(230, 242, 230);
  doc.roundedRect(14, y - 6, W - 28, 28, 3, 3, "F");

  doc.setTextColor(...verdeOscuro);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.text(t.client, 20, y + 1);
  doc.setDrawColor(...verde);
  doc.setLineWidth(0.3);
  doc.line(20, y + 3, 80, y + 3);

  doc.setFont("helvetica", "normal");
  doc.setTextColor(...negro);
  doc.setFontSize(10);
  doc.text(customerName, 20, y + 10);

  doc.setFontSize(9);
  doc.setTextColor(...gris);
  doc.text(t.email + ": " + customerEmail, 20, y + 17);
  doc.text(
    t.dest + ": " + destino + "  |  " + t.currency + ": " + symbol,
    110,
    y + 17,
  );

  // ── TABLA PRODUCTOS ──
  y = 128;
  doc.setFillColor(...verde);
  doc.roundedRect(14, y, W - 28, 10, 2, 2, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8.5);
  doc.text(t.product, 20, y + 7);
  doc.text(t.qty, 98, y + 7, { align: "center" });
  doc.text(t.unit, 143, y + 7, { align: "center" });
  doc.text(t.sub, W - 20, y + 7, { align: "right" });

  y += 12;

  // Recorremos los items del carrito
  items.forEach((item, i) => {
    const itemName = item.name || "Producto";
    const kg = item.weight || 0; // peso en kg
    const unitPriceUSD = item.priceUSD || 0; // precio unitario en USD
    const subtotalUSD = kg * unitPriceUSD; // subtotal en USD

    if (i % 2 === 0) {
      doc.setFillColor(249, 246, 239);
      doc.rect(14, y - 5, W - 28, 10, "F");
    }
    doc.setTextColor(...negro);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.text(itemName, 20, y + 2);
    doc.text(kg + " kg", 98, y + 2, { align: "center" });
    doc.setTextColor(...verde);
    doc.text(formatPrice(unitPriceUSD), 143, y + 2, { align: "center" });
    doc.setFont("helvetica", "bold");
    doc.setTextColor(...negro);
    doc.text(formatPrice(subtotalUSD), W - 20, y + 2, { align: "right" });
    y += 10;
  });

  // Línea y TOTAL
  doc.setDrawColor(...verde);
  doc.setLineWidth(0.5);
  doc.line(14, y + 2, W - 14, y + 2);
  y += 8;

  doc.setFillColor(...verde);
  doc.roundedRect(100, y, W - 114, 16, 3, 3, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.text(t.total + ":", 108, y + 7);
  doc.setFontSize(12);
  doc.text(formatPrice(totalUSD), W - 18, y + 8, { align: "right" });

  // USD equivalente si moneda != USD (y no COP para evitar confusión)
  if (country !== "en" && country !== "co") {
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7);
    doc.setTextColor(200, 230, 200);
    doc.text("(USD " + totalUSD.toLocaleString() + ")", W - 18, y + 13, {
      align: "right",
    });
  }

  y += 26;

  // ── PAGO Y ENVÍO (igual)
  doc.setFillColor(230, 242, 230);
  doc.roundedRect(14, y, 85, 18, 3, 3, "F");
  doc.setTextColor(...verdeOscuro);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8);
  doc.text(t.pay, 20, y + 6);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(...negro);
  doc.setFontSize(10);
  doc.text(payMethod, 20, y + 14);

  doc.setFillColor(230, 242, 230);
  doc.roundedRect(W - 99, y, 85, 18, 3, 3, "F");
  doc.setTextColor(...verdeOscuro);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8);
  doc.text(t.ship, W - 93, y + 6);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(...negro);
  doc.setFontSize(10);
  doc.text(tiempoEnvio, W - 93, y + 14);

  y += 28;

  // ── NOTA CAMPESINOS ──
  doc.setFillColor(...amarillo);
  doc.roundedRect(14, y, W - 28, 22, 3, 3, "F");
  doc.setTextColor(26, 16, 0);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.text(t.thanks, W / 2, y + 8, { align: "center" });
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  const thankLines = doc.splitTextToSize(t.thanksub, W - 40);
  doc.text(thankLines, W / 2, y + 15, { align: "center" });

  y += 30;

  // ── TÉRMINOS ──
  doc.setFillColor(240, 247, 240);
  doc.roundedRect(14, y, W - 28, 26, 3, 3, "F");
  doc.setTextColor(...gris);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8);
  doc.text(t.terms, 20, y + 7);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(7.5);
  doc.text(t.t1, 20, y + 13);
  doc.text(t.t2, 20, y + 18);
  doc.text(t.t3, 20, y + 23);

  // ── FOOTER ──
  doc.setFillColor(...verdeOscuro);
  doc.rect(0, 272, W, 25, "F");

  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.text("Green Gold Colombia", W / 2, 281, { align: "center" });

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(180, 220, 180);
  doc.text(
    "info@greengoldcolombia.com  -  wa.me/573123456789  -  Antioquia, Colombia",
    W / 2,
    287,
    { align: "center" },
  );

  doc.setTextColor(100, 150, 100);
  doc.setFontSize(7);
  doc.text(
    "2025 Green Gold Colombia - Exportacion Premium de Aguacate Hass",
    W / 2,
    293,
    { align: "center" },
  );

  doc.save("Factura_" + orderNum + "_GreenGoldColombia.pdf");
}

// ═══════════════════════════════════════════════
//  FIX 2 — REEMPLAZA tu función trackOrder
// ═══════════════════════════════════════════════

function trackOrder() {
  const id = document.getElementById("tracking-id").value.trim();
  const result = document.getElementById("tracking-result");

  if (!id) {
    showToast("⚠️ Ingresa un número de pedido");
    return;
  }

  const statuses = [
    { label: "Pedido creado", icon: "📋", done: true, active: false },
    { label: "En preparacion", icon: "📦", done: true, active: false },
    { label: "En transito", icon: "✈️", done: false, active: true },
    { label: "Entregado", icon: "🎯", done: false, active: false },
  ];

  result.innerHTML = `
    <div class="tracking-card">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:16px;">
        <div>
          <div style="font-size:12px;color:var(--gris);margin-bottom:4px;">Número de pedido</div>
          <div style="font-family:var(--font-display);font-size:1.3rem;font-weight:700;color:var(--verde);">${id}</div>
        </div>
        <span style="background:var(--amarillo);color:#1a1000;padding:4px 12px;border-radius:50px;font-size:12px;font-weight:700;">✈️ En tránsito</span>
      </div>
      <p style="font-size:14px;color:var(--gris);margin-bottom:20px;">Tu pedido está en tránsito hacia su destino. Llegada estimada en 12 días.</p>
      <div class="tracking-steps">
        ${statuses
          .map(
            (s) => `
          <div class="tracking-step ${s.done ? "completed" : ""} ${s.active ? "active" : ""}">
            <div class="tracking-step-dot">${s.done ? "✓" : s.active ? "→" : ""}</div>
            <div class="tracking-step-label">${s.label}</div>
          </div>
        `,
          )
          .join("")}
      </div>
    </div>`;
}

// ═══════════════════════════════════════════════
//  FIX 3 — REEMPLAZA tu función checkout
// ═══════════════════════════════════════════════

function checkout() {
  if (cart.length === 0) {
    showToast("⚠️ Tu carrito está vacío");
    return;
  }

  const name = document.getElementById("customer-name").value.trim();
  const email = document.getElementById("user-email").value.trim();
  const terms = document.getElementById("terms-checkbox").checked;
  const payEl = document.getElementById("payment-method");
  const payText = payEl.options[payEl.selectedIndex].text;

  if (!name) {
    showToast("⚠️ Ingresa tu nombre completo");
    return;
  }
  if (!email || !email.includes("@")) {
    showToast("⚠️ Ingresa un correo válido");
    return;
  }
  if (!terms) {
    showToast("⚠️ Debes aceptar los términos y condiciones");
    return;
  }

  const orderNum = "GGC-" + Math.floor(100000 + Math.random() * 900000);
  const total = cart.reduce((s, i) => s + (i.total || i.price * i.qty), 0);
  const countryEl = document.getElementById("destination-country");
  const countryName = countryEl.options[countryEl.selectedIndex].text;

  // Modal confirmación
  document.getElementById("order-number").textContent = orderNum;
  document.getElementById("confirm-text").textContent =
    "Hola " +
    name +
    "! Tu pedido por $" +
    total.toLocaleString() +
    " USD hacia " +
    countryName +
    " ha sido procesado. " +
    "Descarga tu factura a continuación.";

  document.getElementById("cart-modal").classList.remove("open");
  document.getElementById("confirm-modal").classList.add("open");

  // Generar PDF automáticamente
  try {
    generarFacturaPDF(
      orderNum,
      name,
      email,
      [...cart],
      total,
      countryName,
      payText,
    );
  } catch (e) {
    console.error("Error PDF:", e);
    showToast("⚠️ Error al generar el PDF: " + e.message);
  }

  // Limpiar carri
  cart = [];
  document.getElementById("cart-count").textContent = "0";
}

// ========================
// TOAST
// ========================
function showToast(message, type = "info") {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.className = `toast ${type} show`;
  setTimeout(() => toast.classList.remove("show"), 3000);
}

// ========================
// INICIALIZACIÓN
// ========================
document.addEventListener("DOMContentLoaded", () => {
  // Idioma
  const savedLang = localStorage.getItem("preferredLanguage");
  const langSelect = document.getElementById("language");
  if (savedLang && langSelect.querySelector(`option[value="${savedLang}"]`)) {
    langSelect.value = savedLang;
  } else {
    langSelect.value = "es";
  }
  applyTranslations(langSelect.value);
  langSelect.addEventListener("change", changeLang);

  // Cargar datos
  loadCart();
  loadOrders();

  // Vista guardada
  const savedView = localStorage.getItem("activeView");
  if (savedView && document.getElementById(`view-${savedView}`)) {
    showView(savedView);
  } else {
    showView("inicio");
  }

  // Navegación
  document.querySelectorAll("[data-view]").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const view = link.getAttribute("data-view");
      if (view) showView(view);
    });
  });

  // Modal carrito
  const cartIcon = document.getElementById("cart-icon");
  const cartModal = document.getElementById("cart-modal");
  const closeModal = document.getElementById("close-modal");
  cartIcon.addEventListener("click", (e) => {
    e.preventDefault();
    cartModal.classList.add("open");
  });
  closeModal.addEventListener("click", () =>
    cartModal.classList.remove("open"),
  );
  cartModal.addEventListener("click", (e) => {
    if (e.target === cartModal) cartModal.classList.remove("open");
  });

  // Checkout
  document.getElementById("checkout-btn").addEventListener("click", checkout);

  // Rastreo
  const trackBtn = document
    .getElementById("tracking-btn")
    .addEventListener("click", function () {});
  const trackInput = document.getElementById("tracking-id");
  trackBtn.addEventListener("click", () => {
    const orderId = trackInput.value.trim();
    if (orderId) displayTrackingResult(orderId);
    else alert("Ingresa un número de pedido");
  });

  // Formulario de contacto
  const contactForm = document.getElementById("contact-form");
  if (contactForm) contactForm.addEventListener("submit", submitContact);

  // Selector de país para envío
  const countrySelect = document.getElementById("destination-country");
  if (countrySelect) {
    countrySelect.addEventListener("change", updateShippingEstimate);
    updateShippingEstimate();
  }

  // Botón volver arriba
  const backBtn = document.getElementById("back-to-top");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) backBtn.classList.add("show");
    else backBtn.classList.remove("show");
  });
  backBtn.addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: "smooth" }),
  );

  // Iniciar simulación de progreso de pedidos
  startOrderProgressSimulation();

  // Modales de privacidad
  const privacyModal = document.getElementById("privacy-modal");
  const openPrivacyLinks = document.querySelectorAll(
    "#open-privacy, #open-privacy-link, #open-privacy-footer, #open-privacy-cart",
  );
  openPrivacyLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      privacyModal.classList.add("open");
    });
  });
  document
    .getElementById("close-privacy")
    .addEventListener("click", () => privacyModal.classList.remove("open"));
  privacyModal.addEventListener("click", (e) => {
    if (e.target === privacyModal) privacyModal.classList.remove("open");
  });
});

// ========================
// FUNCIONES GLOBALES
// ========================
window.add = function (name, priceUSD, weight) {
  addToCart(name, priceUSD, weight);
};

window.changeLang = changeLang;
window.checkout = checkout;
window.submitContact = submitContact;
window.prevSlide = function () {
  const slide = document.getElementById("carousel-slide");
  if (!slide) return;
  const total = slide.children.length;
  let current = parseInt(slide.getAttribute("data-current") || "0");
  current = (current - 1 + total) % total;
  slide.setAttribute("data-current", current);
  slide.style.transform = `translateX(-${current * 100}%)`;
  document
    .querySelectorAll(".dot")
    .forEach((dot, i) => dot.classList.toggle("active", i === current));
};
window.nextSlide = function () {
  const slide = document.getElementById("carousel-slide");
  if (!slide) return;
  const total = slide.children.length;
  let current = parseInt(slide.getAttribute("data-current") || "0");
  current = (current + 1) % total;
  slide.setAttribute("data-current", current);
  slide.style.transform = `translateX(-${current * 100}%)`;
  document
    .querySelectorAll(".dot")
    .forEach((dot, i) => dot.classList.toggle("active", i === current));
};
window.closeConfirm = function () {
  document.getElementById("confirm-modal").classList.remove("open");
};

// Inicializar carrusel
document.addEventListener("DOMContentLoaded", () => {
  const slide = document.getElementById("carousel-slide");
  if (slide) {
    slide.setAttribute("data-current", "0");
    const total = slide.children.length;
    for (let i = 0; i < total; i++) {
      const dot = document.createElement("span");
      dot.classList.add("dot");
      if (i === 0) dot.classList.add("active");
      dot.addEventListener("click", () => {
        slide.setAttribute("data-current", i);
        slide.style.transform = `translateX(-${i * 100}%)`;
        document
          .querySelectorAll(".dot")
          .forEach((d, idx) => d.classList.toggle("active", idx === i));
      });
      document.getElementById("carousel-dots").appendChild(dot);
    }
    setInterval(() => {
      if (
        document.getElementById("carousel-container") &&
        document.getElementById("carousel-container").offsetParent !== null
      ) {
        nextSlide();
      }
    }, 5000);
  }
});

function sendInvoiceEmail(
  orderId,
  totalUSD,
  items,
  userEmail,
  customerName,
  paymentMethod,
) {
  const lang = document.getElementById("language").value;
  const totalFormatted = formatPrice(totalUSD, lang);
  const templateParams = {
    to_email: userEmail,
    order_id: orderId,
    total: totalFormatted,
    items: items.map((i) => `${i.name} (${i.weight}kg)`).join(", "),
    date: new Date().toLocaleString(),
    customer_name: customerName,
    payment_method: paymentMethod,
  };
  emailjs
    .send("service_lh4j3bm", "template_y4g51vl", templateParams)
    .then(() => alert("Factura enviada a " + userEmail))
    .catch((err) => console.error("Error al enviar:", err));
}