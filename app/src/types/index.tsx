import { types } from 'mobx-state-tree';
import * as actions from './actions'

export const Address = types.model('Address', {
  postalCode: types.string,
  country: types.string,
  locality: types.string,
  street: types.string
});

export const Place = types.model('Place', {
  name: types.string,
  address: Address
});

export const Organization = types.model('Organization', {
  name: types.string,
  description: types.string
});

export const User = types.model('User', {
  givenName: types.string,
  familyName: types.string,
  image: types.string
});

export const Event = types.model('Event', {
  name: types.string,
  location: types.optional(Place, null),
  sponsor: types.optional(Organization, null),
  performers: types.optional(types.array(User), []),
  startDate: types.optional(types.Date, null),
  endDate: types.optional(types.Date, null),
  about: types.optional(types.string, ''),
  inLanguage: types.optional(types.string, 'pl'),
  image: types.optional(types.string, ''),
  attendees: types.optional(types.array(User), [])
});

export const EventStore = types
  .model('EventStore', {
    items: types.array(Event)
  })
  .actions(self => ({
    fetch() {
      self.items = [].concat(self.items, [
        {
          name: 'JS Workshop'
        }
      ])
    }
  }));

export const Store = types.model('Store', {
  eventStore: types.optional(EventStore, {
    items: []
  })
});

export type IOrganization = typeof Organization.Type;
export type IEvent = typeof Event.Type;
export type IUser = typeof User.Type;
export type IPlace = typeof Place.Type;
export type IAddress = typeof Address.Type;
export type IStore = typeof Store.Type;
export type IEventStore = typeof EventStore.Type;
