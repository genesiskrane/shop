<template>
	<p>
		Welcome To My Online Store <br />
		{{ domain }}
	</p>
</template>

<script setup>
const domain = window.location.hostname;
</script>
