export const toggleLayer = (layer) => {
    return {
        type: "TOGGLE_LAYER",
        payload: { id: layer.id, visibility: !layer.visible }
    }
}