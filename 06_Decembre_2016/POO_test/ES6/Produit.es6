/**
 * Created by dirago on 01/12/2016.
 */
class ProductView {

    /**
     *
     * @param target
     * @param id
     * @param name
     * @param exclTAX
     * @param currency
     * @param color
     * @param pix
     */

    constructor(target, id, name, exclTAX, currency, color, pix){
        this.target = target;
        this.id = id;
        this.name = name;
        this.exclTAX = exclTAX;
        this.currency = currency;
        this.color = color;
        this.pixURL = pix;
        this.createElement(target, id, name, exclTAX, currency, color, pix);
    }

    /**
     *
     * @param target
     * @param id
     * @param name
     * @param exclTAX
     * @param currency
     * @param color
     * @param pix
     */

    createElement(target, id, name, exclTAX, currency, color, pix){
        // Création du block
        let block = document.createElement('div');
        block.className = "product";
        target.appendChild(block);
        // Création de l'image
        let pict = document.createElement('img');
        pict.src = pix;
        block.appendChild(pict);
        // Création de la légende
        let p = document.createElement('p');
        p.innerText = "Nom: " + name;
        block.appendChild(p);
        let p2 = document.createElement('p');
        p2.innerText = "Prix: " + Math.round((exclTAX * 1.2)*100)/100 + " " + currency;
        block.appendChild(p2);
    }

}