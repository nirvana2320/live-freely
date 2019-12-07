import { PlaceName } from '../../enums/place.enum';

export class Place {
    placeName: PlaceName;
    outer_links = [];

    getPlacename() {
        return this.placeName;
    }
    setPlacename(name: PlaceName) {
        this.placeName = name;
    }
}