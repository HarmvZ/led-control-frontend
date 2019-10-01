<template>
  <q-page class="row flex flex-center q-px-md">
    <q-card class="col-12 bg-grey-9 text-center q-mt-md">
      <q-card-section class="bg-primary text-white">
        <div class="text-h6">Preset colors</div>
      </q-card-section>
      <set-color />
    </q-card>
    <q-card class="col-12 bg-grey-9 text-center q-mt-md">
      <q-card-section class="bg-primary text-white">
        <div class="text-h6">Custom colors</div>
      </q-card-section>
      <div class="row">
        <div class="col-6 items-center">
          <div class="text-h6">Instant</div>
          <ChangeColor :transition="false"/>
        </div>
        <div class="col-6 items-center">
          <div class="text-h6">Transition</div>
          <ChangeColor :transition="true"/>
        </div>
      </div>
    </q-card>
  </q-page>
</template>

<style>
</style>

<script>
import ChangeColor from 'components/ChangeColor';
import SetColor from 'components/SetColor';
// import DarkCard from 'components/DarkCard';

export default {
  name: 'Color',
  components: { ChangeColor, SetColor }, //, DarkCard },
};
</script>
