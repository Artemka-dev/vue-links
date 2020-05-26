import firebase from "firebase/app"

export default {
    actions: {
        async deleteLink({dispatch, commit}, id) {
            try {
                const uid = await dispatch("getUID")
                await firebase.database().ref(`/users/${uid}/links`).child(id).remove()
            } catch (error) {
                commit("setError", error)
                throw error
            }
        },

        async createLink({dispatch, commit}, {shortLink, link, description, slugify, clicks}) {
            try {
                const uid = await dispatch("getUID")
                const myLink = await firebase.database().ref(`/users/${uid}/links`).push({shortLink, link, description, slugify, clicks})

                return {shortLink, link, description, slugify, clicks, id: myLink.key}
            } catch (error) {
                commit("setError", error)
                throw error
            }
        },

        async getAllLinks({dispatch, commit}) {
            try {
                const uid = await dispatch("getUID")
                const links = (await firebase.database().ref(`/users/${uid}/links`).once("value")).val() || {}
                
                return Object.keys(links).map(key => ({...links[key], id: key}))
            } catch (error) {
                commit("setError", error)
                throw error
            }
        },
        async getLink({dispatch, commit}, slug) {
            try {
                const uid = await dispatch("getUID")
                const links = (await firebase.database().ref(`/users/${uid}/links`).once("value")).val() || {}
                const new_links = Object.keys(links).map(key => ({...links[key], id: key}))

                const link = new_links.find(elem => elem.slugify === slug)
                return link

            } catch (error) {
                commit("setError", error)
                throw error
            }
        },
        async updateLink({dispatch, commit}, {id, slugify, description, link}) {
            try {
                const uid = await dispatch("getUID")
                await firebase.database().ref(`/users/${uid}/links`).child(id).update({slugify, description, link})
            } catch (error) {
                commit("setError", error)
                throw error
            }
        },

        async updateClick({dispatch, commit}, {id, clicks}) {
            try {
                const uid = await dispatch("getUID")
                await firebase.database().ref(`/users/${uid}/links`).child(id).update({clicks})
             } catch (error) {
                commit("setError", error)
                throw error
             }
        }

    }
}