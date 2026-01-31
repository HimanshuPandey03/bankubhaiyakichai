import './Menu.css';
import chaiImg from '../assets/chai.png';
import vadaPavImg from '../assets/menu/vada_pav.png';
import samosaPavImg from '../assets/menu/samosa_pav.png';
import bunMaskaImg from '../assets/menu/bun_maska.png';
import namkeenImg from '../assets/menu/namkeen.png';
import biscuitsImg from '../assets/menu/biscuits.jpeg';
import toastButterImg from '../assets/menu/toast_butter.jpeg';

const menuItems = [
    { id: 1, name: 'Masala Chai', category: 'Chai', price: '₹10', desc: 'Our signature blend with spices.', image: chaiImg },
    { id: 2, name: 'Vada Pav', category: 'Snacks', price: '₹15', desc: 'Spicy potato fritter in a bun.', image: vadaPavImg },
    { id: 3, name: 'Samosa Pav', category: 'Snacks', price: '₹18', desc: 'Crispy samosa served with pav.', image: samosaPavImg },
    { id: 4, name: 'Bun Maska', category: 'Toast', price: '₹12', desc: 'Fresh bun with generous butter.', image: bunMaskaImg },
    { id: 5, name: 'Namkeen', category: 'Snacks', price: '₹10', desc: 'Assorted chivda and mixture.', image: namkeenImg },
    { id: 6, name: 'Biscuits', category: 'Snacks', price: '₹10', desc: 'Osmania and salt biscuits.', image: biscuitsImg },
    { id: 7, name: 'Toast Butter', category: 'Toast', price: '₹20', desc: 'Crispy toast with butter.', image: toastButterImg },
    { id: 8, name: 'Ginger Chai', category: 'Chai', price: '₹15', desc: 'Strong ginger flavored tea.', image: chaiImg },
];

const Menu = () => {
    return (
        <div className="menu-container">
            <h1 className="page-title">Our Menu</h1>
            <div className="menu-grid">
                {menuItems.map((item) => (
                    <div key={item.id} className="menu-card">
                        <div className="card-image">
                            {item.image ? (
                                <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            ) : (
                                <div className="placeholder-img">
                                    <span>{item.name}</span>
                                </div>
                            )}
                        </div>
                        <div className="card-content">
                            <div className="card-header">
                                <h3>{item.name}</h3>
                                <span className="price">{item.price}</span>
                            </div>
                            <p className="description">{item.desc}</p>
                            <span className="category-tag">{item.category}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Menu;
