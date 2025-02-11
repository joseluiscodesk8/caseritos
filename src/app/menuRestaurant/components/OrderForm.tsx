import { useState } from "react";

const subOptions: Record<string, string[]> = {
  Medellín: ["Centro", "El Poblado", "Belén", "Laureles", "Manrique"],
  Envigado: ["Zona Centro", "Las Vegas", "La Magnolia", "San Marcos", "El Dorado"],
  Itagüí: ["Santa María", "Ditaires", "Simón Bolívar", "La Gloria", "San Gabriel"],
  Sabaneta: ["Aves María", "Aliadas", "San Joaquín", "María Auxiliadora", "Restrepo Naranjo"],
  "La Estrella": ["La Tablaza", "Pueblo Viejo", "San Agustín", "Ferrini", "Primavera"],
  Bello: ["Niquía", "Zamora", "Cabañas", "Santa Ana", "París"],
};

const menus = [
  "Menú 1 - Chicharrón con Patacón",
  "Menú 2 - Bandeja Paisa",
  "Menú 3 - Sancocho Antioqueño"
];

const OrderForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    subCity: "",
    place: "",
    placeName: "",
    message: "",
  });

  const [selectedMenus, setSelectedMenus] = useState<Record<string, number>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };  

  const handleSelectMenu = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const menu = e.target.value;
    if (!menu) return;
    setSelectedMenus((prev) => ({
      ...prev,
      [menu]: (prev[menu] || 0) + 1,
    }));
  };
  

  const updateMenuQuantity = (menu: string, amount: number) => {
    setSelectedMenus((prev: Record<string, number>) => {
      const newCount = (prev[menu] || 0) + amount;
      if (newCount <= 0) {
        return Object.fromEntries(Object.entries(prev).filter(([key]) => key !== menu));
      }
      return { ...prev, [menu]: newCount };
    });
  };
  

  const sendToWhatsApp = () => {
    const { name, phone, address, city, subCity, place, placeName, message } = formData;
    const whatsappNumber = "573017844046";
    const formattedMenus = Object.entries(selectedMenus)
      .map(([menu, count]) => `* ${menu} x${count}`)
      .join("\n");
    
    const formattedMessage = `📌 Pedido de Restaurante:\n\n* ${name}\n* ${phone}\n* ${address}\n* ${city} - ${subCity}\n* ${place}: ${placeName}\n\n🍽️ *Menús seleccionados:*\n${formattedMenus}\n\n📝 *Mensaje Adicional:* \n${message || "Sin mensaje adicional."}`;
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(formattedMessage)}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div>
      <h2>Realizar Pedido</h2>
      <input type="text" name="name" placeholder="Nombre" onChange={handleChange} />
      <input type="text" name="phone" placeholder="Teléfono" onChange={handleChange} />
      <input type="text" name="address" placeholder="Dirección" onChange={handleChange} />

      <select name="city" onChange={handleChange}>
        <option value="">Selecciona tu ciudad</option>
        {Object.keys(subOptions).map((city) => (
          <option key={city} value={city}>{city}</option>
        ))}
      </select>

      {formData.city && (
        <select name="subCity" onChange={handleChange}>
          <option value="">Selecciona tu sector en {formData.city}</option>
          {subOptions[formData.city].map((subCity) => (
            <option key={subCity} value={subCity}>{subCity}</option>
          ))}
        </select>
      )}

      <select name="place" onChange={handleChange}>
        <option value="">Selecciona el lugar</option>
        <option value="Unidad">Unidad</option>
        <option value="Conjunto">Conjunto</option>
        <option value="Apartamento">Apartamento</option>
        <option value="Casa">Casa</option>
        <option value="Local">Local</option>
      </select>

      {formData.place && (
        <input
          type="text"
          name="placeName"
          placeholder={`Nombre de la ${formData.place}`}
          onChange={handleChange}
        />
      )}

      <select onChange={handleSelectMenu}>
        <option value="">Selecciona un menú</option>
        {menus.map((menu) => (
          <option key={menu} value={menu}>{menu}</option>
        ))}
      </select>
      
      {Object.entries(selectedMenus).map(([menu, count]) => (
        <div key={menu}>
          <span>{menu}</span>
          <button onClick={() => updateMenuQuantity(menu, -1)}>-</button>
          <span>{count}</span>
          <button onClick={() => updateMenuQuantity(menu, 1)}>+</button>
        </div>
      ))}

      <textarea name="message" placeholder="Escribe un mensaje adicional..." rows={4} onChange={handleChange}></textarea>

      <button onClick={sendToWhatsApp}>Enviar a WhatsApp</button>
    </div>
  );
};

export default OrderForm;