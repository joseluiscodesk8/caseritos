import { useState } from "react";

const OrderForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    place: "",
    menu: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendToWhatsApp = () => {
    const { name, phone, address, city, place, menu, message } = formData;
    
    // Número de WhatsApp del restaurante
    const whatsappNumber = "573017844046"; // Reemplázalo con el número real
    
    // Mensaje formateado
    const formattedMessage = `📌 Pedido de Restaurante:

* ${name}
* ${phone}
* ${address}
* ${city}
* ${place}
* ${menu}

📝 *Mensaje Adicional:* 
${message || "Sin mensaje adicional."}`;

    // URL de WhatsApp
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(formattedMessage)}`;

    // Redirigir a WhatsApp
    window.open(whatsappURL, "_blank");
  };

  return (
    <div>
      <h2>Realizar Pedido</h2>
      
      <input type="text" name="name" placeholder="Nombre" onChange={handleChange} />
      <input type="text" name="phone" placeholder="Teléfono" onChange={handleChange} />
      <input type="text" name="address" placeholder="Dirección" onChange={handleChange} />

      <select name="city" onChange={handleChange}>
        <option value="">Sector</option>
        <option value="Medellín">Medellín</option>
        <option value="Envigado">Envigado</option>
        <option value="Colores">Colores</option>
        <option value="La América">La América</option>
        <option value="San Pío">San Pío</option>
      </select>

      <select name="place" onChange={handleChange}>
        <option value="">Selecciona el lugar</option>
        <option value="Apartamento">Apartamento</option>
        <option value="Casa">Casa</option>
        <option value="Local">Local</option>
      </select>

      <select name="menu" onChange={handleChange}>
        <option value="">Selecciona un menú</option>
        <option value="Menú 1 - Chicharrón con Patacón">Menú 1 - Chicharrón con Patacón</option>
        <option value="Menú 2 - Bandeja Paisa">Menú 2 - Bandeja Paisa</option>
        <option value="Menú 3 - Sancocho Antioqueño">Menú 3 - Sancocho Antioqueño</option>
      </select>

      <textarea 
        name="message" 
        placeholder="Escribe un mensaje adicional..." 
        rows={4} 
        onChange={handleChange}
      ></textarea>

      <button onClick={sendToWhatsApp}>Enviar a WhatsApp</button>
    </div>
  );
};

export default OrderForm;
