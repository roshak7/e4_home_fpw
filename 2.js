function checkPropertyInObject(obj, property) {
    if (property in obj) {
        return true;
    } else {
        return false;
    }
}
