import { mount } from '@vue/test-utils';
import Global from '@/components/Global.vue';

describe('Component Global', () => {
  it('Should return the total number of cases', () => {
    const wrapper = mount(Global, {
      propsData: {
        item: {
          NewConfirmed: 70871,
          TotalConfirmed: 2470922,
          NewDeaths: 4940,
          TotalDeaths: 169952,
          NewRecovered: 21835,
          TotalRecovered: 645094,
        },
      },
    });
    expect(wrapper.find('.global__confirmed_total').text()).toEqual('2.470.922');
  });
  it('The total number of new confirmed cases should be return', () => {
    const wrapper = mount(Global, {
      propsData: {
        item: {
          NewConfirmed: 70871,
          TotalConfirmed: 2470922,
          NewDeaths: 4940,
          TotalDeaths: 169952,
          NewRecovered: 21835,
          TotalRecovered: 645094,
        },
      },
    });
    expect(wrapper.find('.global__confirmed_new').text()).toEqual('+70.871');
  });
  it('The total number of Deaths cases should be return', () => {
    const wrapper = mount(Global, {
      propsData: {
        item: {
          NewConfirmed: 70871,
          TotalConfirmed: 2470922,
          NewDeaths: 4940,
          TotalDeaths: 169952,
          NewRecovered: 21835,
          TotalRecovered: 645094,
        },
      },
    });
    expect(wrapper.find('.global__deaths_total').text()).toEqual('169.952');
  });
  it('The total number of new Deaths cases should be return', () => {
    const wrapper = mount(Global, {
      propsData: {
        item: {
          NewConfirmed: 70871,
          TotalConfirmed: 2470922,
          NewDeaths: 4940,
          TotalDeaths: 169952,
          NewRecovered: 21835,
          TotalRecovered: 645094,
        },
      },
    });
    expect(wrapper.find('.global__deaths_new').text()).toEqual('+4.940');
  });
  it('The total number of recovered cases should be return', () => {
    const wrapper = mount(Global, {
      propsData: {
        item: {
          NewConfirmed: 70871,
          TotalConfirmed: 2470922,
          NewDeaths: 4940,
          TotalDeaths: 169952,
          NewRecovered: 21835,
          TotalRecovered: 645094,
        },
      },
    });
    expect(wrapper.find('.global__recovered_total').text()).toEqual('645.094');
  });
  it('The total number of new recovered cases should be return', () => {
    const wrapper = mount(Global, {
      propsData: {
        item: {
          NewConfirmed: 70871,
          TotalConfirmed: 2470922,
          NewDeaths: 4940,
          TotalDeaths: 169952,
          NewRecovered: 21835,
          TotalRecovered: 645094,
        },
      },
    });
    expect(wrapper.find('.global__recovered_new').text()).toEqual('+21.835');
  });
});