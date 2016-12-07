/**
 * Created by dirago on 01/12/2016.
 */
class ProductWidget {

    /**
     *
     * @param src
     * @param targetElement
     */

    constructor(src, targetElement) {
        this.targetElement = targetElement;
        let loader = new GestionnaireJSON();
        loader.getJSONfromURL(src);
        this.data = loader.data.products;

        console.log(this.data);

        this.createView(this.data, this.targetElement)
    }

    /**
     * cette fonction va créer la vue
     * @param data
     * @param target
     */

    createView(data, target){
        data.map(e => {
            new ProductView(target, e.id, e.name, e.exclTAX, e.currency, e.color, e.pix)
        })
    }
}