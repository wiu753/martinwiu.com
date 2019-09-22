<template>
	<div>
		<div>
			<h1 class="text-2xl sm:text-3xl mb-4 font-semibold">Uses</h1>
			<p class="mb-6">
				Here are some lists of what I use from day to day. It's
				cool to get some inspiration from others sometimes.
				I also use this list as a reference for when I
				have to set up a new work environment.
			</p>
		</div>
		<div>
			<h2 class="text-xl mb-4 font-semibold sm:text-2xl">Workstation</h2>
			<ul class="list-disc ml-5">
				<me-uses title="MacBook Pro 15 (2019), 256GB, i7 2.6GHz, 16GB RAM" link="https://www.apple.com/shop/buy-mac/macbook-pro/15-inch-space-gray-2.6ghz-6-core-processor-with-turbo-boost-up-to-4.5ghz-256gb#">
					This is the machine I do most of my work on. I hook it into my
					<a class="fancy-underline" href="#monitor">ultrawide</a> via
					USB-C. I can't begin to explain how nice it is to just plug
					in one cable and get everything you need.
				</me-uses>
				<me-uses id="monitor" title="Samsung 34 inch LED Curved C34J791" link="https://www.samsung.com/uk/monitors/curved-cf791/">
					This is the baby I stare at every single day. I have one
					at home and one at work. It has two USB inputs which
					I use to plug in my mouse and keyboard.
				</me-uses>
				<me-uses title="Apple Magic 2 Keyboard Space Gray" link="https://www.apple.com/shop/product/MRMH2LL/A/magic-keyboard-with-numeric-keypad-us-english-space-gray?fnode=4c">
          Love this keyboard, it's wireless and lasts for ever.
        </me-uses>
				<me-uses title="Razer Mamba Wireless" link="https://www.razer.com/gaming-mice/razer-mamba-wireless">
					I have used Razer mice for so many years now that I'm
					scared to try anything else. I'm a fan over wireless
					stuff so I picked this one. The battery life is pretty
					great for a gaming mice.
				</me-uses>
				<me-uses title="Steelseries Arctis Pro Wireless Headset" link="https://steelseries.com/gaming-headsets/arctis-pro-wireless">
					Surprise, another wireless device! Comes with two batteries
					and a charger that also acts as a reciever. When one battery
					runs out you just swap them around.
				</me-uses>
				<me-uses title="IKEA Bekant Sit/Stand Desk" link="https://www.ikea.com/us/en/catalog/products/S49022538/">
          A desk that can be raised and lowered electronically.
        </me-uses>
			</ul>
		</div>
		<div>
			<h2 class="text-xl mb-4 sm:text-2xl font-semibold">Software</h2>
			<ul class="list-disc ml-5">
				<me-uses title="VSCode" link="https://code.visualstudio.com/">
					A blazing fast editor with all the features I need. I use the material
					<a class="fancy-underline" href="https://marketplace.visualstudio.com/items?itemName=Equinusocio.vsc-material-theme">theme</a> and
					<a class="fancy-underline" href="https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme">icons</a>.
				</me-uses>
				<me-uses title="iTerm2" link="https://www.iterm2.com/">
					Such a great terminal with plenty of customization available.
					I use it together with
					<a class="fancy-underline" href="https://ohmyz.sh/">OhMyZsh</a>
				</me-uses>
				<me-uses title="Chrome" link="https://www.google.com/chrome/">
					Chrome gets the job done for me. I use the feature for swapping profiles
					between work and personal a lot.
				</me-uses>
				<me-uses title="Sizzy" link="https://sizzy.app/">
          An awesome browser for testing out different layouts.
        </me-uses>
				<me-uses title="GitHub Desktop" link="https://desktop.github.com/">
					GitHub client with a minimalistic style.
					<a class="fancy-underline" href="https://www.gitkraken.com/git-client">GitKraken</a>
					is also great.
				</me-uses>
				<me-uses title="Figma" link="https://figma.com/">
          Cross platform design tool, it's really impressive.</me-uses>
				<me-uses title="PhpStorm" link="https://www.jetbrains.com/phpstorm/">
          When I have to do back-end work PhpStorm is my go-to IDE choice.
        </me-uses>
			</ul>
		</div>
	</div>
</template>

<script>
import MeUses from '@/components/MeUses'
export default {
	components: {
    MeUses
  }
}
</script>
