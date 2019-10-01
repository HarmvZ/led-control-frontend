<template>
  <q-page class="row flex flex-center q-px-md">
    <FCard>
      <q-card-section class="bg-primary text-white">
        <div class="text-h6">Preset colors</div>
      </q-card-section>
      <set-color />
    </FCard>
    <FCard>
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
    </FCard>
  </q-page>
</template>

<style>
</style>

<script>
import ChangeColor from 'components/ChangeColor';
import SetColor from 'components/SetColor';
import FCard from 'components/functional/FCard';

export default {
  name: 'Color',
  components: { ChangeColor, SetColor, FCard },
};
</script>
